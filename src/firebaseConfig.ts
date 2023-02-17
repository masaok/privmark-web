// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCsURxQcN7SShHjqjy5BC2qd_9Zgto86y0',
  authDomain: 'private-market-data.firebaseapp.com',
  projectId: 'private-market-data',
  storageBucket: 'private-market-data.appspot.com',
  messagingSenderId: '126114183301',
  appId: '1:126114183301:web:f6d25ddcc512ef6f1091ec',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
