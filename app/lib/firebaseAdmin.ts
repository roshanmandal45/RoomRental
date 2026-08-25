import { getApps, cert, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export function getFirebaseAdminAuth() {
  try {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/^"|"$/g, "").trim()
      : undefined;

    if (!privateKey || !process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL) {
      console.warn("Firebase Admin environment variables are missing!");
    }

    const firebaseAdminApp =
      getApps().length > 0
        ? getApps()[0]
        : initializeApp({
            credential: cert({
              projectId: process.env.FIREBASE_PROJECT_ID,
              clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
              privateKey,
            }),
          });

    return getAuth(firebaseAdminApp);
  } catch (error) {
    console.error("Firebase Admin Initialization Error:", error);
    throw error;
  }
}