import {z} from 'zod';

/**
 * ResearchMetadata is an interface that defines the structure of the ResearchMetadata data
 * @interface
 * @property {boolean} show_on_homepage - A boolean value indicating whether the research should be shown on the homepage.
 * @property {boolean} show_on_researches_page - A boolean value indicating whether the research should be shown on the researches page.
 *
 * @remarks
 * The show_on_homepage and show_on_researches_page properties can be used to control the visibility of the research on the homepage and researches page.
 *
 * @since 1.0.0
 */

export interface ResearchMetadata {
    show_on_homepage: boolean;
    show_on_researches_page: boolean;
}

export const ResearchMetadataSchema = z.object({
  show_on_homepage: z.boolean({
    required_error: 'Show on homepage is required',
    invalid_type_error: 'Show on homepage must be a boolean',
  }),
  show_on_researches_page: z.boolean({
    required_error: 'Show on researches page is required',
    invalid_type_error: 'Show on researches page must be a boolean',
  }),
});
