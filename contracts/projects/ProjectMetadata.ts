import {z} from 'zod';

/**
 * ProjectMetaData is an interface that defines the structure of the ProjectMetaData data
 * @interface
 * @property {boolean} show_on_homepage - A boolean value indicating whether the project should be shown on the homepage.
 * @property {boolean} show_on_projects_page - A boolean value indicating whether the project should be shown on the projects page.
 * @property {boolean} show_on_search - A boolean value indicating whether the project should be shown on the search page.
 *
 * @remarks
 * The show_on_homepage and show_on_projects_page properties can be used to control the visibility of the project on the homepage and projects page.
 *
 * @since 1.0.0
 */
export interface ProjectMetadata {
    show_on_homepage: boolean;
    show_on_projects_page: boolean;
    show_on_search: boolean;
}

export const ProjectMetadataSchema = z.object({
  show_on_homepage: z.boolean({
    required_error: 'Show on homepage is required',
    invalid_type_error: 'Show on homepage must be a boolean',
  }),
  show_on_projects_page: z.boolean({
    required_error: 'Show on projects page is required',
    invalid_type_error: 'Show on projects page must be a boolean',
  }),
  show_on_search: z.boolean({
    required_error: 'Show on search is required',
    invalid_type_error: 'Show on search must be a boolean',
  }),
});
