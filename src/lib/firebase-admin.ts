import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    // Leave 'credential' blank. 
    // It will automatically use the IAM permissions of your Cloud Run service!
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  });
}

const adminDb = admin.firestore();
const adminStorage = admin.storage();

export { adminDb, adminStorage };