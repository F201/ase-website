import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

import {UserBasicInformation, UserBasicInformationSchema} from './UserBasicInformation';

/**
 * @interface UserProfile
 * @description Represents the profile information of a user, including basic information and timestamps.
 *
 * @property {UserBasicInformation} basic_information - The basic information of the user.
 * @property {Timestamp} created_at - The timestamp when the profile was created.
 * @property {Timestamp} updated_at - The timestamp when the profile was last updated.
 *
 * @example
 * // Example usage:
 * const userProfile: UserProfile = {
 *   basic_information: {
 *     first_name: 'Jane',
 *     last_name: 'Doe',
 *     email: 'jane.doe@example.com',
 *     student_id: '1302194004'
 *   },
 *   created_at: Timestamp.now(),
 *   updated_at: Timestamp.now()
 * };
 *
 * @remarks
 * The timestamps can be useful for tracking the creation and modification dates of the user profile.
 *
 * @since 1.0.0
 */
export interface UserProfile {
  basic_information: UserBasicInformation;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export const UserProfileSchema: z.ZodSchema<UserProfile> = z.object({
  basic_information: UserBasicInformationSchema,
  created_at: z.instanceof(Timestamp),
  updated_at: z.instanceof(Timestamp),
});
