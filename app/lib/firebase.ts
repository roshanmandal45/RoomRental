import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getAnalytics,
  isSupported,
  Analytics,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXoSSQGVTbToVvUQW0wZDKlHTCtW4Y1Y4",
  authDomain: "roomrentalapp-12897.firebaseapp.com",
  projectId: "roomrentalapp-12897",
  storageBucket: "roomrentalapp-12897.firebasestorage.app",
  messagingSenderId: "167523176735",
  appId: "1:167523176735:web:6496e5678f6c5ac180a02a",
  measurementId: "G-BNRLVM5KY0",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);

let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };