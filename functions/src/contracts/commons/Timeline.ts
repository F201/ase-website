import {Timestamp} from 'firebase/firestore';
import {z} from 'zod';

/**
 * @interface Timeline
 * @description Represents the timeline of an event or activity.
 *
 * @property {Timestamp} started_at - The timestamp when the event/activity started.
 * @property {Timestamp} ended_at - The timestamp when the event/activity ended.
 *
 *
 * @since 1.0.0
 *
 */
export interface Timeline {
    started_at: Timestamp;
    ended_at?: Timestamp;
}

export const TimelineSchema: z.ZodSchema<Timeline> = z.object({
  started_at: z.instanceof(Timestamp, {
    message: 'Started At must be an instance of Firebase Firestore Timestamp',
  }),
  ended_at: z.instanceof(Timestamp, {
    message: 'Ended At must be an instance of Firebase Firestore Timestamp',
  }).optional(),
});
