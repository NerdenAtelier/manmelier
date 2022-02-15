// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //파이어베이스 초기화
import { getAuth } from "firebase/auth"; //인증 모듈
import { getFirestore } from "firebase/firestore"; //Firestore 사용 모듈

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authService = getAuth(); //인증 서비스
export const dbService = getFirestore(); //데이터베이스 서비스
