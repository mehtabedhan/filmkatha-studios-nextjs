import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

// var env   = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyAhCcMu29tXgXE_7NwMWLiQ-w3fH7lNJk8",
  authDomain: "video-streaming-platform-1bd2e.firebaseapp.com",
  projectId: "video-streaming-platform-1bd2e",
  storageBucket: "video-streaming-platform-1bd2e.appspot.com",
  messagingSenderId: "591678230118",
  appId: "1:591678230118:web:d3ae97e667f01b09bf27a7",
  measurementId: "G-2JGGC54GKJ"
};


  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);

  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),
  
  //   // Optional argument. If true, the SDK automatically refreshes App Check
  //   // tokens as needed.
  //   isTokenAutoRefreshEnabled: true
  // });
  

  const firestore=getFirestore(app)
  const storage=getStorage(app)

  
export {app,storage,firestore};


