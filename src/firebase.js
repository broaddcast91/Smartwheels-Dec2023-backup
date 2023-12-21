import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsYtXJVW-ilgh91gCnndpoWezs9Ap14uk",
  authDomain: "broaddcast-smartwheels.firebaseapp.com",
  projectId: "broaddcast-smartwheels",
  storageBucket: "broaddcast-smartwheels.appspot.com",
  messagingSenderId: "1013075910000",
  appId: "1:1013075910000:web:9792b4f686a172c26503b5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

