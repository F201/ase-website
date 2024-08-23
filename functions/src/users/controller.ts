import {HttpsError, onRequest} from 'firebase-functions/v1/https';
import {sanitizeRequestMethod} from '../utils/handler';
import {createUserProfile} from './service';
import {
  beforeUserCreated,
  beforeUserSignedIn,
} from 'firebase-functions/v2/identity';
import admin from 'firebase-admin';
import {onDocumentCreated} from 'firebase-functions/v2/firestore';
import {onCall} from 'firebase-functions/v2/https';
import {
  ResponseMeta,
  ResponseMetaSchema,
} from '../contracts/commons/Response';
import * as functions from 'firebase-functions';
import {UserProfile} from '@contracts/users/UserProfile';
import {Timestamp as FirebaseTimestamp} from 'firebase/firestore';
import {Timestamp} from 'firebase-admin/firestore';

export const CreateUser = onRequest(async (request, response) => {
  sanitizeRequestMethod(request, ['POST']);

  const {user} = request.body;
  const data = await createUserProfile(user);

  response.status(data.status).send(data);
});

export const BeforeUserCreated = beforeUserCreated(async (event) => {
  const user = event.data;

  if (
    ['@telkomuniversity.ac.id', '@student.telkomuniversity.ac.id'].every(
      (domain) => !user?.email?.includes(domain)
    )
  ) {
    throw new HttpsError(
      'invalid-argument',
      'Only Telkom University email is allowed'
    );
  }
});

export const BeforeUserSignedIn = beforeUserSignedIn(async (event) => {
  const user = event.data;

  if (
    ['@telkomuniversity.ac.id', '@student.telkomuniversity.ac.id'].every(
      (domain) => !user?.email?.includes(domain)
    )
  ) {
    throw new HttpsError(
      'invalid-argument',
      'Only Telkom University email is allowed'
    );
  }
});

export const SyncUser = onDocumentCreated('users/{id}', async (event) => {
  const firestore = admin.firestore();

  const id = event?.data?.id;

  if (!id) {
    return;
  }

  return firestore.collection('users').doc(id).update({
    status: 'UPDATED',
  });
});

export const HelloWorld = onCall(() => {
  const responseMeta: ResponseMeta = {
    status: 200,
    message: 'Hello from Firebase!',
    data: ['Hello', 'World'],
  };

  const isValid = ResponseMetaSchema.safeParse(responseMeta);

  if (!isValid.success) {
    throw new HttpsError('internal', 'ResponseMeta is not valid');
  }

  return responseMeta;
});

export const UserSignup = functions.auth.user().onCreate((userRecord) => {
  const {uid, email, displayName} = userRecord;
  const safeDisplayName = displayName?.trim() || '';
  if (!email) {
    throw new HttpsError('internal', 'User email is required');
  }

  const userProfile: UserProfile = {
    basic_information: {
      first_name: safeDisplayName.trim().split(' ').slice(0, -1).join(' '),
      last_name: safeDisplayName.trim().split(' ').slice(-1).join(' '),
      email: {
        telkom: email.trim(),
      },
      identifier_id: uid,
    },
    metadata: {
      show_on_homepage: true,
      show_on_members_page: true,
      show_on_search: true,
    },
    user_role: '19999',
    laboratory_roles: ['49999'],
    created_at: Timestamp.now() as FirebaseTimestamp,
    updated_at: Timestamp.now() as FirebaseTimestamp,
  };

  createUserProfile(userProfile);
});
