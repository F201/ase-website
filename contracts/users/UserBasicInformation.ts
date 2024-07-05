import {z} from 'zod';

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
