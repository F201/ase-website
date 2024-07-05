import {z} from 'zod';

export interface ResponseMeta {
    status: number;
    message: string;
    data: string | object | Array<unknown> | null;
}

export const ResponseMetaSchema: z.ZodSchema<ResponseMeta> = z.object({
  status: z.number({
    required_error: 'Status is required',
    invalid_type_error: 'Status must be a number',
  }),
  message: z.string({
    required_error: 'Message is required',
    invalid_type_error: 'Message must be a string',
  }),
  data: z.union([z.string(), z.object({}), z.array(z.unknown()), z.null()]),
});
