import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

/**
 * @interface UserAchievement
 * @description Represents an achievement of a user.
 *
 * @property {string} title - The title of the achievement.
 * @property {string} issuer - The issuer of the achievement.
 * @property {string} description - A brief description of the achievement.
 * @property {Timestamp} issued_date - The date when the achievement was awarded
 *
 * @remarks
 * This interface can be extended to include more achievement-related information
 * as needed for various applications.
 *
 * @since 1.0.0
 */

export interface UserAchievement {
  title: string;
  issuer: string;
  issued_date: Timestamp;
  description: string;
}

export const UserAchievementSchema: z.ZodSchema<UserAchievement> = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  issuer: z.string({
    required_error: 'Issuer is required',
    invalid_type_error: 'Issuer must be a string',
  }),
  issued_date: z
    .instanceof(Timestamp)
    .refine((item) => item instanceof Timestamp, {
      message: 'Date awarded must be an instance of Timestamp',
    }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
});
