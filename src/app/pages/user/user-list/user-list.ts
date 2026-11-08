import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { USER_PERMISSIONS } from '@/core/constants/permissions';
import { CreateUserRequestDto } from '@/core/models/CreateUserRequestDto';
import { UpdateUserRequestDto } from '@/core/models/UpdateUserRequestDto';
import { UserResponseDto } from '@/core/models/UserResponseDto';
import { AuthService } from '@/core/services/auth.service';
import { ConfirmService } from '@/core/services/confirm.service';
import { NotificationService } from '@/core/services/notification.service';
import { UserService } from '@/core/services/user.service';
import { getControlError } from '@/core/utils/form-errors.util';
import { PageHeader } from '@/shared/components/page-header/page-header';
import { TableSkeleton } from '@/shared/components/table-skeleton/table-skeleton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { filter, finalize, switchMap } from 'rxjs';

@Component({
    selector: 'app-user-list',
    imports: [ReactiveFormsModule, TableModule, ButtonModule, DialogModule, InputTextModule, PasswordModule, IconFieldModule, InputIconModule, TagModule, TooltipModule, PageHeader, TableSkeleton],
    templateUrl: './user-list.html',
    styleUrl: './user-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserList implements OnInit {
    private readonly userService = inject(UserService);
    private readonly auth = inject(AuthService);
    private readonly notify = inject(NotificationService);
    private readonly confirm = inject(ConfirmService);
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly users = signal<UserResponseDto[]>([]);
    protected readonly loading = signal(false);
    protected readonly saving = signal(false);
    protected readonly dialogOpen = signal(false);
    protected readonly editingUser = signal<UserResponseDto | null>(null);

    protected readonly total = computed(() => this.users().length);
    protected readonly isEditMode = computed(() => this.editingUser() !== null);
    protected readonly canCreate = computed(() => this.auth.hasPermission(USER_PERMISSIONS.CREATE));
    protected readonly canUpdate = computed(() => this.auth.hasPermission(USER_PERMISSIONS.UPDATE));
    protected readonly canDelete = computed(() => this.auth.hasPermission(USER_PERMISSIONS.DELETE));

    protected readonly form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
        password: ['', [Validators.minLength(8), Validators.maxLength(100)]]
    });
    protected readonly fieldError = getControlError;

    ngOnInit(): void {
        this.load();
    }

    protected openNew(): void {
        this.editingUser.set(null);
        this.form.reset();
        this.setPasswordRequired(true);
        this.dialogOpen.set(true);
    }

    protected openEdit(user: UserResponseDto): void {
        this.editingUser.set(user);
        this.form.reset({
            name: user.name,
            lastname: user.lastname,
            dni: user.dni,
            email: user.email,
            password: ''
        });
        this.setPasswordRequired(false);
        this.dialogOpen.set(true);
    }

    protected closeDialog(): void {
        this.dialogOpen.set(false);
    }

    protected save(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notify.warn('Completa correctamente todos los campos requeridos');

            return;
        }

        const raw = this.form.getRawValue();
        const editing = this.editingUser();
        const base = {
            name: raw.name,
            lastname: raw.lastname,
            dni: raw.dni,
            email: raw.email
        };
        const request$ = editing ? this.userService.update(editing.id, this.buildUpdateDto(base, raw.password)) : this.userService.create({ ...base, password: raw.password } satisfies CreateUserRequestDto);

        this.saving.set(true);
        request$
            .pipe(
                finalize(() => this.saving.set(false)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe({
                next: () => {
                    this.notify.success(editing ? 'Usuario actualizado correctamente' : 'Usuario creado correctamente');
                    this.closeDialog();
                    this.load();
                },
                error: (error: unknown) => this.applyServerErrors(error)
            });
    }

    protected remove(user: UserResponseDto): void {
        this.confirm
            .confirm({
                header: 'Confirmar eliminación',
                message: `¿Eliminar permanentemente al usuario <strong>${this.escapeHtml(user.email)}</strong>?`,
                acceptLabel: 'Sí, eliminar'
            })
            .pipe(
                filter(Boolean),
                switchMap(() => this.userService.delete(user.id)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe({
                next: () => {
                    this.notify.success('Usuario eliminado correctamente');
                    this.load();
                },
                error: (error: unknown) => this.notifyUnexpectedError(error, 'No se pudo eliminar el usuario')
            });
    }

    protected applyGlobalFilter(table: Table, event: Event): void {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    private load(): void {
        this.loading.set(true);
        this.userService
            .getAll()
            .pipe(
                finalize(() => this.loading.set(false)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe({
                next: (users) => this.users.set(users),
                error: (error: unknown) => this.notifyUnexpectedError(error, 'No se pudieron cargar los usuarios')
            });
    }

    private setPasswordRequired(required: boolean): void {
        const validators = [Validators.minLength(8), Validators.maxLength(100)];
        this.form.controls.password.setValidators(required ? [Validators.required, ...validators] : validators);
        this.form.controls.password.updateValueAndValidity();
    }

    private buildUpdateDto(base: Omit<UpdateUserRequestDto, 'password'>, password: string): UpdateUserRequestDto {
        return password ? { ...base, password } : base;
    }

    private applyServerErrors(error: unknown): void {
        if (!(error instanceof HttpErrorResponse)) {
            this.notifyUnexpectedError(error, 'No se pudo guardar el usuario');

            return;
        }

        const errors = error.error?.errors as Record<string, string> | null | undefined;

        if (!errors) {
            if (error.status === 409) {
                const message = error.error?.message ?? 'El correo o DNI ya se encuentra registrado.';

                for (const controlName of ['email', 'dni']) {
                    const control = this.form.get(controlName);
                    control?.setErrors({ server: message });
                    control?.markAsTouched();
                }
            }

            return;
        }

        for (const [field, message] of Object.entries(errors)) {
            const controlName = field === 'lastName' ? 'lastname' : field;
            const control = this.form.get(controlName);
            control?.setErrors({ server: message });
            control?.markAsTouched();
        }
    }

    private notifyUnexpectedError(error: unknown, fallback: string): void {
        if (!(error instanceof HttpErrorResponse)) {
            this.notify.error(error instanceof Error ? error.message : fallback);
        }
    }

    private escapeHtml(value: string): string {
        return value.replace(/[&<>"']/g, (character) => {
            switch (character) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                default:
                    return '&#39;';
            }
        });
    }
}
