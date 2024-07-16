/**
 * Enum for LaboratoryRoleEnum
 * @readonly
 * @enum {string}
 * @description Represents the roles of a user in the laboratory.
 * @property {string} PROFESSOR - The professor role
 * @property {string} GUEST_PROFESSOR - The guest professor role
 * @property {string} LABORATORY_ASSISTANT - The laboratory assistant role
 * @property {string} RESEARCH_STUDENT - The research student role
 * @property {string} STUDENT - The student role
 * @property {string} NO_TYPE - The intern role
 * @since 1.0.0
 *
 * @example
 * // Example usage:
 * const laboratoryRole: LABORATORY_ROLE = LABORATORY_ROLE.PROFESSOR;
 * console.log(laboratoryRole); // Output: '40001'
 */

export const LABORATORY_ROLE = {
  PROFESSOR: '40001',
  GUEST_PROFESSOR: '40002',
  LABORATORY_ASSISTANT: '40003',
  RESEARCH_STUDENT: '40004',
  STUDENT: '40005',
  INTERN: '40006',
  NO_TYPE: '49999',
} as const;

/**
 * @type {string[]} LABORATORY_ROLE_VALUE
 * @description The value of the laboratory role can include multiple roles.
 * @since 1.0.0
 */
export const VALID_MULTIPLE_ROLES: string[] = [
  LABORATORY_ROLE.LABORATORY_ASSISTANT,
  LABORATORY_ROLE.RESEARCH_STUDENT,
  LABORATORY_ROLE.STUDENT,
] as const;

export type VALID_MULTIPLE_ROLES_VALUE = typeof VALID_MULTIPLE_ROLES[number];

export type LABORATORY_ROLE_VALUE = typeof LABORATORY_ROLE[keyof typeof LABORATORY_ROLE];
