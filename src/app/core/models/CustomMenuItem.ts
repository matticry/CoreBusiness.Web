import { MenuItem } from 'primeng/api';

export interface CustomMenuItem extends MenuItem {
    requiredRoles?: string[];
    requiredPermissions?: string[];
    isAuthenticated?: boolean;
}
