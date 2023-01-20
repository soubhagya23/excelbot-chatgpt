import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB6pz-yhaZAWu6w-fqcqD_r-i5-ugDojEo",
    authDomain: "excelbot-auth.firebaseapp.com",
    projectId: "excelbot-auth",
    storageBucket: "excelbot-auth.appspot.com",
    messagingSenderId: "892555290264",
    appId: "1:892555290264:web:536aaa0b52d0f9e398d2ed"
  };

const app = initializeApp(firebaseConfig) ;
export const auth = getAuth(app) ;