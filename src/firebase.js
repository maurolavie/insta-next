// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-68528.firebaseapp.com",
  projectId: "insta-next-68528",
  storageBucket: "insta-next-68528.appspot.com",
  messagingSenderId: "687925964993",
  appId: "1:687925964993:web:4f9f766ced32fc1c096440",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//service firebase.storage {
//    match /b/{bucket}/o {
//      match /{allPaths=**} {
//        allow read;
//        allow write: if
//        request.resource.size < 2 * 1024 * 1024 &&
//        request.resource.contentType.matches('image/.*')
//      }
//    }
//  }
