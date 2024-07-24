import {z} from 'zod';

/**
 * @interface ResponseMeta
 * @description Represents the metadata of a response, including status, message, and data.
 *
 * @property {number} status - The status code of the response.
 * @property {string} message - A message providing additional information about the response.
 * @property {string | object | Array<unknown> | null} data - The data returned in the response. This can be a string, an object, an array, or null.
 *
 * @remarks
 * The `data` property is flexible and can accommodate different types of response data.
 *
 * @since 1.0.0
 */
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
