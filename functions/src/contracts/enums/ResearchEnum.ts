/**
 * ResearchType enum
 * @readonly
 * @enum {string}
 * @description Represents the types of research.
 * @since 1.0.0
 * @example
 * // Example usage:
 * const researchType: RESEARCH_TYPE = RESEARCH_TYPE.CONFERENCE;
 * console.log(researchType); // Output: '10001'
 *
 */

export const RESEARCH_TYPE = {
  CONFERENCE: '20001',
  JOURNAL: '20002',
  WORKSHOP: '20003',
  OTHER: '20004',
} as const;

export type RESEARCH_TYPE_VALUE = typeof RESEARCH_TYPE[keyof typeof RESEARCH_TYPE];
