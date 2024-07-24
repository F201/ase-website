import {z} from 'zod';

import {Timeline, TimelineSchema} from '../commons/Timeline';

/**
 * PartnershipMetadata is an interface that defines the structure of the PartnershipMetadata data
 * @interface
 * @property {boolean} show_on_homepage - A boolean value indicating whether the partnership should be shown on the homepage.
 * @property {Timeline} timeline - The timeline of the partnership.
 *
 * @remarks
 * The show_on_homepage property can be used to control the visibility of the partnership on the homepage.
 * The timeline property can be used to define the timeline of the partnership.
 *
 * @since 1.0.0
 */
export interface PartnershipMetadata {
    show_on_homepage: boolean;
    timeline: Timeline;
}

export const PartnershipMetadataSchema = z.object({
  show_on_homepage: z.boolean({
    required_error: 'Show on homepage is required',
    invalid_type_error: 'Show on homepage must be a boolean',
  }),
  timeline: TimelineSchema,
});
