import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@/core/services/auth.service';
import { NotificationService } from '@/core/services/notification.service';
import { getControlError } from '@/core/utils/form-errors.util';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, ButtonModule, InputTextModule, PasswordModule],
    templateUrl: './login.html',
    styleUrl: './login.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
    private readonly auth = inject(AuthService);
    private readonly notify = inject(NotificationService);
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly loading = signal(false);
    protected readonly form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    });
    protected readonly fieldError = getControlError;

    protected login(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notify.warn('Completa el correo y la contraseña');

            return;
        }

        const { email, password } = this.form.getRawValue();

        this.loading.set(true);
        this.auth
            .login(email, password)
            .pipe(
                finalize(() => this.loading.set(false)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe({
                next: () => {
                    this.notify.success('Bienvenido');
                    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/pages/users';
                    this.router.navigateByUrl(returnUrl);
                },
                error: (error: unknown) => {
                    if (!(error instanceof HttpErrorResponse)) {
                        this.notify.error(error instanceof Error ? error.message : 'No se pudo iniciar sesión');
                    }
                }
            });
    }
}
