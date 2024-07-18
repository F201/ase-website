
import {z} from 'zod';
/**
 * ResearchAuthor is an interface that defines the structure of the ResearchAuthor data
 * @interface
 * @property {string[]} alias - The alias of the author
 * @property {string[]} article_ids - The article ids of the author
 * @property {string} scholar_id - The scholar id of the author
 * @property {string} url - The url of the author
 *
 * @since 1.0.0
 *
 */
export interface UserAuthorshipInformation {
    alias?: string[];
    article_ids?: string[];
    scholar_id: string;
    url: string;
}

export const UserAuthorshipInformationSchema: z.ZodSchema<UserAuthorshipInformation> = z.object({
  scholar_id: z.string({
    required_error: 'Author Scholar ID is required',
    invalid_type_error: 'Author Scholar ID must be a string',
  }),
  url: z.string({
    required_error: 'Author URL is required',
    invalid_type_error: 'Author URL must be a string',
  }),
  alias: z.array(z.string(), {
    required_error: 'Author Alias is required',
    invalid_type_error: 'Author Alias must be an array of string',
  }).optional(),
  article_ids: z.array(z.string(), {
    required_error: 'Author Researchs is required',
    invalid_type_error: 'Author Researchs must be an array of string',
  }).optional(),
});
