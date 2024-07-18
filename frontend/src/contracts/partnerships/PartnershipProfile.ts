import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

import {FileInformation, FileInformationSchema} from '../files/FileInformation';
import {PartnershipMetadata, PartnershipMetadataSchema} from './PartnershipMetadata';

/**
 * @interface PartnershipProfile
 * @description Represents the profile information of a partnership, including basic information and timestamps.
 *
 * @property {string} organization_name - The name of the organization.
 * @property {string} description - The description of the partnership.
 * @property {FileInformation} logo - The logo of the organization.
 * @property {string} website - The website of the organization.
 * @property {Timestamp} created_at - The timestamp when the profile was created.
 * @property {Timestamp} updated_at - The timestamp when the profile was last updated.
 * @property {PartnershipMetadata} metadata - The metadata of the partnership.
 *
 * @remarks
 * The timestamps can be useful for tracking the creation and modification dates of the partnership profile.
 *
 * @since 1.0.0
 */

export interface PartnershipProfile {
    description: string;
    logo: FileInformation;
    metadata: PartnershipMetadata
    organization_name: string;
    website?: string;
    created_at: Timestamp;
    updated_at: Timestamp;
}

export const PartnershipProfileSchema: z.ZodSchema<PartnershipProfile> = z.object({
  organization_name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
  logo: FileInformationSchema,
  website: z.string({
    invalid_type_error: 'Website must be a string',
  }).url({
    message: 'Input should be a valid URI',
  }).optional(),
  created_at: z.instanceof(Timestamp, {
    message: 'Created At must be an instance of Firebase Firestore Timestamp',
  }),
  updated_at: z.instanceof(Timestamp, {
    message: 'Updated At must be an instance of Firebase Firestore Timestamp',
  }),
  metadata: PartnershipMetadataSchema,
});
