import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { USER_PERMISSIONS } from '@/core/constants/permissions';
import { CustomMenuItem } from '@/core/models/CustomMenuItem';
import { AuthService } from '@/core/services/auth.service';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../app.menuitem';

@Component({
    selector: 'app-menu',
    imports: [AppMenuitem],
    templateUrl: './app-menu.html',
    styleUrl: './app-menu.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenu {
    private readonly auth = inject(AuthService);
    private readonly router = inject(Router);

    protected readonly model = computed<CustomMenuItem[]>(() => this.buildMenu());

    protected logout(): void {
        this.auth.logout();
        this.router.navigate(['/auth/login']);
    }

    private buildMenu(): CustomMenuItem[] {
        const groups: CustomMenuItem[] = [
            {
                label: 'Gestión',
                items: [
                    {
                        label: 'Usuarios',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/pages/users'],
                        isAuthenticated: true,
                        requiredPermissions: [USER_PERMISSIONS.READ]
                    },
                    {
                        label: 'Items de trabajo',
                        icon: 'pi pi-fw pi-list-check',
                        routerLink: ['/pages/work-items'],
                        isAuthenticated: true
                    }
                ]
            },
            {
                label: 'Sesión',
                items: [
                    {
                        label: 'Cerrar sesión',
                        icon: 'pi pi-fw pi-sign-out',
                        isAuthenticated: true,
                        command: () => this.logout()
                    }
                ]
            }
        ];

        return groups.map((group) => ({ ...group, items: group.items?.filter((item) => this.isVisible(item)) })).filter((group) => !!group.items?.length);
    }

    private isVisible(item: MenuItem): boolean {
        const customItem = item as CustomMenuItem;

        if (customItem.isAuthenticated && !this.auth.isAuthenticated()) {
            return false;
        }

        if (customItem.requiredPermissions?.length && !this.auth.hasAnyPermission(customItem.requiredPermissions)) {
            return false;
        }

        if (customItem.requiredRoles?.length && !this.auth.hasAnyRole(customItem.requiredRoles)) {
            return false;
        }

        return true;
    }
}
