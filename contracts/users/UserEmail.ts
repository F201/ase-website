import {z} from 'zod';

/**
 * @interface UserBasicInformation
 * @description Represents the basic information of a user.
 *
 * @property {string} telkom - The email domain for telkom university.
 * @property {string} personal - The email domain for personal.
 *
 * @example
 * // Example usage:
 * const email: UserEmail = {
 *   telkom_email: 'johndoe@telkomuniversity.ac.id',
 *   personal_email: 'johndow@gmail.com',
 * };
 *
 * @remarks
 * This interface can be extended to include more user-related information
 * as needed for various applications.
 *
 * @since 1.0.1
 */

export interface UserEmail {
    telkom: string;
    personal?: string;
}

export const UserEmailSchema: z.ZodSchema<UserEmail> = z.object({
  telkom: z.string({
    required_error: 'Telkom email is required',
    invalid_type_error: 'Telkom email must be a string',
  })
    .email()
    .refine((email) => /@(telkomuniversity\.ac\.id|student\.telkomuniversity\.ac\.id)$/.test(email), {
      message: 'Telkom email must be from telkomuniversity.ac.id domain',
    }),
  personal: z.string().email().optional(),
});
