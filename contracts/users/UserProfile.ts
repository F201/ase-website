import {Timestamp} from 'firebase-admin/firestore';
import {z} from 'zod';

import {UserBasicInformation, UserBasicInformationSchema} from './UserBasicInformation';

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
