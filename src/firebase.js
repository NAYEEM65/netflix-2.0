// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCyoGzPIHk51Sk4gaSYbaJhx-jmnXodNZk',

    authDomain: 'netflix-clone-21sept.firebaseapp.com',

    projectId: 'netflix-clone-21sept',

    storageBucket: 'netflix-clone-21sept.appspot.com',

    messagingSenderId: '57775910200',

    appId: '1:57775910200:web:9096fd6134fee2cfc065cd',

    measurementId: 'G-4L6PGFMNWF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
