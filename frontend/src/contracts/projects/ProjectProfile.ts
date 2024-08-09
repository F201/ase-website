import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

import {PROJECT_STATUS, PROJECT_STATUS_VALUE} from '../enums/ProjectStatusEnum';

import {ProjectMetadata, ProjectMetadataSchema} from './ProjectMetadata';
/**
 * @interface ProjectProfile
 * @description Represents the profile information of a project, including basic information and timestamps.
 *
 * @property {string} name - The name of the project.
 * @property {string} description - A brief description of the project.
 * @property {Timestamp} created_at - The timestamp when the project was created.
 * @property {Timestamp} updated_at - The timestamp when the project was last updated.
 * @property {PROJECT_STATUS_VALUE} status - The current status of the project.
 *
 * @since 1.0.0
 */
export interface ProjectProfile {
    name: string;
    description: string;
    metadata: ProjectMetadata
    created_at?: Timestamp;
    updated_at?: Timestamp;
    status: PROJECT_STATUS_VALUE;
}

export const ProjectProfileSchema: z.ZodSchema<ProjectProfile> = z.object({
  name: z.string({
    required_error: 'Project Name is required',
    invalid_type_error: 'Project Name must be a string',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
  status: z.nativeEnum(PROJECT_STATUS, {
    message: 'Project Status must be in the enum list',
  }),
  created_at: z.instanceof(Timestamp, {
    message: 'Created At must be an instance of Firebase Firestore Timestamp',
  }),
  updated_at: z.instanceof(Timestamp, {
    message: 'Updated At must be an instance of Firebase Firestore Timestamp',
  }),
  metadata: ProjectMetadataSchema,
});
