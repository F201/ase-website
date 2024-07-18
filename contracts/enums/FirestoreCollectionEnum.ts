/**
 * FirestoreCollectionEnum
 * @description Firestore collection names
 * @since 1.0.0
 * @enum
 * @readonly
 * @type {object}
 * @property {string} PARTNERSHIPS - The partnerships collection
 * @property {string} RESEARCHES - The researches collection
 * @property {string} USERS - The users collection
 * @property {string} SKILLS - The skills collection
 * @remarks
 * This enum can be used to reference Firestore collection names in the application.
 * @example
 * // This example demonstrates how to use the FirestoreCollectionEnum in the application
 * import {FirestoreCollectionEnum} from 'contracts/enums/FirestoreCollectionEnum';
 * const collectionName = FirestoreCollectionEnum.USERS;
 * console.log(collectionName); // Output: 'users'
 */

export const FirestoreCollectionEnum = {
  PARTNERSHIPS: 'partnerships',
  RESEARCHES: 'researches',
  USERS: 'users',
  SKILLS: 'skills',
} as const;

export type FirestoreCollectionEnum = typeof FirestoreCollectionEnum[keyof typeof FirestoreCollectionEnum];
