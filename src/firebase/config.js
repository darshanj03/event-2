import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB1VEvm6MWTIWhFsek7mDEzUGZ2g9wPhU",
  authDomain: "event-119d0.firebaseapp.com",
  databaseURL: "https://event-119d0-default-rtdb.firebaseio.com",
  projectId: "event-119d0",
  storageBucket: "event-119d0.appspot.com",
  messagingSenderId: "707036252825",
  appId: "1:707036252825:web:f5fe9630b56f2699714608"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
