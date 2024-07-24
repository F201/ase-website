import {Timestamp} from 'firebase-admin/firestore';

export interface UserProfile {
    first_name: string;
    last_name: string;
    student_id: string;
    created_at: Timestamp;
    updated_at: Timestamp;
}
