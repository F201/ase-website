import {IResponse} from '@utils/interface';
import {UserProfile} from './model';
import {
  FirestoreCollectionEnum,
} from '@contracts/enums/FirestoreCollectionEnum';

import * as admin from 'firebase-admin';

export const createUserProfile = async (user: UserProfile):
 Promise<IResponse> => {
  if (!user) {
    throw new Error('User profile is required');
  }

  const firestore = admin.firestore();

  const student = await firestore.collection(FirestoreCollectionEnum.USERS)
    .where('student_id', '==', user.basic_information.identifier_id)
    .get();

  if (!student.empty) {
    throw new Error('Student ID already exists');
  }

  const document = await firestore
    .collection(FirestoreCollectionEnum.USERS).add(user);

  return {
    status: 201,
    message: 'User profile created successfully',
    data: {id: document.id},
  } as IResponse;
};
