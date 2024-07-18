import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

/**
 * @interface FileInformation
 * @description Represents the information of a file.
 *
 * @property {string} name - The name of the file.
 * @property {string} extension - The extension of the file.
 * @property {number} size - The size of the file in bytes.
 * @property {Timestamp} uploaded_at - The timestamp when the file was uploaded.
 *
 * @since 1.0.0
 */

export interface FileInformation {
    name: string;
    extension: string;
    size: number;
    uploaded_at: Timestamp;
}

export const FileInformationSchema: z.ZodSchema<FileInformation> = z.object({
  name: z.string({
    required_error: 'File name is required',
    invalid_type_error: 'File name must be a string',
  }),
  extension: z.string({
    required_error: 'File extension is required',
    invalid_type_error: 'File extension must be a string',
  }),
  size: z.number({
    required_error: 'File size is required',
    invalid_type_error: 'File size must be a number',
  }),
  uploaded_at: z.instanceof(Timestamp, {
    message: 'Upload At must be an instance of Timestamp',
  }),
});
