/**
 * Project Status Enum
 * @enum
 * @property {string} PENDING - The pending project status
 * @property {string} ONGOING - The ongoing project status
 * @property {string} COMPLETED - The completed project status
 * @property {string} ABANDONED - The canceled project status
 * @readonly
 * @since 1.0.0
 * @example
 * // Example usage:
 * const projectStatus: PROJECT_STATUS = PROJECT_STATUS.ONGOING;
 * console.log(projectStatus); // Output: '30001'
 */

export const PROJECT_STATUS = {
  PENDING: '50001',
  ONGOING: '50002',
  COMPLETED: '50003',
  ABANDONED: '59999',
} as const;

export type PROJECT_STATUS_VALUE = typeof PROJECT_STATUS[keyof typeof PROJECT_STATUS];
