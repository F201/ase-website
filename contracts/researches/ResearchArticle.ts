import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

import {RESEARCH_TYPE, RESEARCH_TYPE_VALUE} from '../enums/ResearchEnum';
import {ResearchMetadata, ResearchMetadataSchema} from './ResearchMetadata';

/**
 * ResearchArticle is an interface that defines the structure of the ResearchArticle data
 * @interface
 * @property {string[]} authors - The authors of the article
 * @property {string} cited - The cited of the article
 * @property {string} research_id - The research id of the article
 * @property {string} title - The title of the article
 * @property {string} year - The year of the article
 * @property {RESEARCH_TYPE_VALUE} research_type - The research type of the article
 * @property {Timestamp} created_at - The timestamp when the article was created.
 * @property {Timestamp} updated_at - The timestamp when the article was last updated.
 *
 * @since 1.0.0
 */
export interface ResearchArticle {
    authors?: string[];
    cited: string;
    research_id: string;
    research_type: RESEARCH_TYPE_VALUE
    title: string;
    year: string;
    metadata: ResearchMetadata;
    created_at?: Timestamp;
    updated_at?: Timestamp;
}

export const ResearchArticleSchema: z.ZodSchema<ResearchArticle> = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  authors: z.array(z.string(), {
    invalid_type_error: 'Authors must be an array of string',
  }).optional(),
  year: z.string({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a string',
  }),
  cited: z.string({
    required_error: 'Cited is required',
    invalid_type_error: 'Cited must be a string',
  }),
  research_id: z.string({
    required_error: 'Research ID is required',
    invalid_type_error: 'Research ID must be a string',
  }),
  metadata: ResearchMetadataSchema,
  research_type: z.nativeEnum(RESEARCH_TYPE, {
    message: 'Research Type must be in the enum list',
  }),
  created_at: z.instanceof(Timestamp, {
    message: 'Created At must be an instance of Firebase Firestore Timestamp',
  }),
  updated_at: z.instanceof(Timestamp, {
    message: 'Updated At must be an instance of Firebase Firestore Timestamp',
  }),
});
