import {z} from 'zod';

/**
 * @interface UserBasicInformation
 * @description Represents the basic information of a user.
 *
 * @property {string} first_name - The first name of the user.
 * @property {string} last_name - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} student_id - The student ID of the user.
 *
 * @example
 * // Example usage:
 * const user: UserBasicInformation = {
 *   first_name: 'John',
 *   last_name: 'Doe',
 *   email: 'john.doe@example.com',
 *   student_id: '1302194004'
 * };
 *
 * @remarks
 * This interface can be extended to include more user-related information
 * as needed for various applications.
 *
 * @since 1.0.0
 */

export interface UserBasicInformation {
    first_name: string;
    last_name: string;
    email: string;
    student_id: string
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
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  })
    .email()
    .refine((email) => /@(telkomuniversity\.ac\.id|student\.telkomuniversity\.ac\.id)$/.test(email), {
      message: 'Email must be from telkomuniversity.ac.id or student.telkomuniversity.ac.id domains',
    }),
  student_id: z.string({
    required_error: 'Student ID is required',
    invalid_type_error: 'Student ID must be a string',
  }).refine((id) => id.length === 10 || id.length === 12, {
    message: 'Student ID must be either 10 or 12 characters long',
  }),
});
