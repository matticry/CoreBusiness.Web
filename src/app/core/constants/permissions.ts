export const USER_PERMISSIONS = {
    CREATE: 'CREATE.USER.PERMISSION',
    READ: 'READ.USER.PERMISSION',
    UPDATE: 'UPDATE.USER.PERMISSION',
    DELETE: 'DELETE.USER.PERMISSION'
} as const;

export const ROLES = {
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN'
} as const;

export type UserPermission = (typeof USER_PERMISSIONS)[keyof typeof USER_PERMISSIONS];
