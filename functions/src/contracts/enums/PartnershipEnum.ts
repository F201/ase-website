/**
 * Partnership Type Enum
 * @enum
 * @property {string} ACADEMIC - The academic partnership type
 * @property {string} INDUSTRY - The industry partnership type
 * @property {string} GOVERNMENT - The government partnership type
 * @property {string} MEDIA - The media partnership type
 * @property {string} NON_PROFIT - The non-profit partnership type
 * @readonly
 * @since 1.0.0
 * @example
 * // Example usage:
 * const partnershipType: PARTNERSHIP_TYPE = PARTNERSHIP_TYPE.ACADEMIC;
 * console.log(partnershipType); // Output: '30001'
 */

export const PARTNERSHIP_TYPE = {
  ACADEMIC: '30001',
  INDUSTRY: '30002',
  GOVERNMENT: '30003',
  MEDIA: '30004',
  NON_PROFIT: '30005',
} as const;

export type PARTNERSHIP_TYPE_VALUE = typeof PARTNERSHIP_TYPE[keyof typeof PARTNERSHIP_TYPE];
