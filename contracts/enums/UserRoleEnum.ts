/**
 * User Role Enum
 * @readonly
 * @enum {string}
 * @description Represents the roles of a user in the system.
 * @property {string} SUPER_ADMIN - The super admin role
 * @property {string} ADMIN - The admin role
 * @property {string} MEMBER - The member role
 * @property {string} GUEST - The guest role
 * @property {string} NO_TYPE - The default role
 * @since 1.0.0
 * @example
 * // Example usage:
 * const userRole: USER_ROLE = USER_ROLE.ADMIN;
 * console.log(userRole); // Output: '10002'
 */

export const USER_ROLE = {
  SUPER_ADMIN: '10001',
  ADMIN: '10002',
  MEMBER: '10003',
  GUEST: '10004',
  NO_TYPE: '19999',
} as const;

export type USER_ROLE_VALUE = typeof USER_ROLE[keyof typeof USER_ROLE];
