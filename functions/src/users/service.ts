import {Timestamp} from 'firebase/firestore';
import {IResponse} from '@utils/interface';

import {UserProfile} from './model';

import * as admin from 'firebase-admin';

export const createUserProfile = async (user: UserProfile):
 Promise<IResponse> => {
  if (!user) {
    throw new Error('User profile is required');
  }

  const firestore = admin.firestore();

  const student = await firestore.collection('users')
    .where('student_id', '==', user.basic_information.identifier_id)
    .get();

  if (!student.empty) {
    throw new Error('Student ID already exists');
  }

  user.created_at = Timestamp.now();
  user.updated_at = Timestamp.now();

  const document = await firestore.collection('users').add(user);

  return {
    status: 201,
    message: 'User profile created successfully',
    data: {id: document.id},
  } as IResponse;
};
