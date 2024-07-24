import {z} from 'zod';

/**
 * UserMetadata is an interface that defines the structure of the UserMetadata data
 * @interface
 * @property {boolean} show_on_homepage - A boolean value indicating whether the user should be shown on the homepage.
 * @property {boolean} show_on_members_page - A boolean value indicating whether the user should be shown on the members page.
 * @property {boolean} show_on_search - A boolean value indicating whether the user should be shown on the search page.
 *
 * @remarks
 * The show_on_homepage and show_on_members_page properties can be used to control the visibility of the user on the homepage and members page.
 *
 * @since 1.0.0
 */
export interface UserMetadata {
    show_on_homepage: boolean;
    show_on_members_page: boolean;
    show_on_search: boolean;
}

export const UserMetadataSchema = z.object({
  show_on_homepage: z.boolean({
    required_error: 'Show on homepage is required',
    invalid_type_error: 'Show on homepage must be a boolean',
  }),
  show_on_members_page: z.boolean({
    required_error: 'Show on members page is required',
    invalid_type_error: 'Show on members page must be a boolean',
  }),
  show_on_search: z.boolean({
    required_error: 'Show on search is required',
    invalid_type_error: 'Show on search must be a boolean',
  }),
});
