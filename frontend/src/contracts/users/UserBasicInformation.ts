import {z} from 'zod';

export interface UserBasicInformation {
    first_name: string;
    last_name: string;
    email: string;
    student_id: string
}

export const UserBasicInformationSchema: z.ZodSchema<UserBasicInformation> = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string()
    .email()
    .refine((email) => /@(telkomuniversity\.ac\.id|student\.telkomuniversity\.ac\.id)$/.test(email), {
      message: 'Email must be from telkomuniversity.ac.id or student.telkomuniversity.ac.id domains',
    }),
  student_id: z.string().refine((id) => id.length === 10 || id.length === 12, {
    message: 'Student ID must be either 10 or 12 characters long',
  }),
});
