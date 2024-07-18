import {z} from 'zod';
import {UserEmail, UserEmailSchema} from './UserEmail';

/**
 * @interface UserBasicInformation
 * @description Represents the basic information of a user.
 *
 * @property {string} first_name - The first name of the user.
 * @property {string} last_name - The last name of the user.
 * @property {UserEmail} email - The email address of the user.
 * @property {string} identifier_id - The identifier ID of the user, like NIP, NIDN, or NIM.
 *
 * @remarks
 * This interface can be extended to include more user-related information
 * as needed for various applications.
 *
 * @since 1.0.1
 */

export interface UserBasicInformation {
    first_name: string;
    last_name: string;
    email: UserEmail;
    identifier_id: string
}

export const UserBasicInformationSchema: z.ZodSchema<UserBasicInformation> = z.object({
  first_name: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
  last_name: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string',
  }),
  email: UserEmailSchema,
  identifier_id: z.string({
    required_error: 'Identifier ID is required',
    invalid_type_error: 'Identifier ID must be a string',
  }).refine((id) => id.length == 8 || id.length === 10 || id.length === 12, {
    message: 'Identifier ID must be either 8, 10 or 12 characters long',
  }),
});
