import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

import {FileInformation, FileInformationSchema} from '../files/FileInformation';
import {LABORATORY_ROLE, LABORATORY_ROLE_VALUE, VALID_MULTIPLE_ROLES, VALID_MULTIPLE_ROLES_VALUE} from '../enums/LaboratoryRoleEnum';
import {USER_ROLE, USER_ROLE_VALUE} from '../enums/UserRoleEnum';
import {UserAuthorshipInformation, UserAuthorshipInformationSchema} from './UserAuthorship';
import {UserBasicInformation, UserBasicInformationSchema} from './UserBasicInformation';
import {UserMetadata, UserMetadataSchema} from './UserMetadata';
/**
 * @interface UserProfile
 * @description Represents the profile information of a user, including basic information and timestamps.
 *
 * @property {UserBasicInformation} basic_information - The basic information of the user.
 * @property {UserAuthorshipInformation} research_information - The research information of the user.
 * @property {FileInformation} profile_picture - The profile picture of the user.
 * @property {UserMetadata} metadata - The metadata of the user.
 * @property {USER_ROLE_VALUE} user_role - The role of the user.
 * @property {Timestamp} created_at - The timestamp when the profile was created.
 * @property {Timestamp} updated_at - The timestamp when the profile was last updated.
 *
 * @remarks
 * The timestamps can be useful for tracking the creation and modification dates of the user profile.
 *
 * @since 1.0.1
 */
export interface UserProfile {
  basic_information: UserBasicInformation;
  research_information?: UserAuthorshipInformation;
  profile_picture?: FileInformation;
  metadata: UserMetadata;
  user_role: USER_ROLE_VALUE;
  laboratory_roles: LABORATORY_ROLE_VALUE[];
  created_at: Timestamp;
  updated_at: Timestamp;
}

export const UserProfileSchema: z.ZodSchema<UserProfile> = z.object({
  basic_information: UserBasicInformationSchema,
  research_information: UserAuthorshipInformationSchema.optional(),
  profile_picture: FileInformationSchema.optional(),
  user_role: z.nativeEnum(USER_ROLE, {
    message: 'User Role must be in the enum list',
  }),
  laboratory_roles: z.array(z.nativeEnum(LABORATORY_ROLE, {
    message: 'Laboratory Role must be in the enum list',
  }))
    .refine((roles)=> {
      const isDuplicate = new Set(roles).size !== roles.length;

      if (isDuplicate) {
        return false;
      }
      return true;
    }, {message: 'There are duplicate laboratory roles.'})
    .refine((roles) => {
      const validRolesSet = new Set(VALID_MULTIPLE_ROLES);

      const invalidRoles = roles
        .filter((role) => !validRolesSet.has(role as VALID_MULTIPLE_ROLES_VALUE));

      // If there are invalid roles and more than one role in total, it's invalid
      if (invalidRoles.length > 0 && roles.length > 1) {
        return false;
      }

      return true;
    }, {
      message: 'Multiple roles are only allowed for students in the roles of research student and laboratory assistant.',
    }),
  metadata: UserMetadataSchema,
  created_at: z.instanceof(Timestamp, {
    message: 'Created At must be an instance of Firebase Firestore Timestamp',
  }),
  updated_at: z.instanceof(Timestamp, {
    message: 'Updated At must be an instance of Firebase Firestore Timestamp',
  }),
});
