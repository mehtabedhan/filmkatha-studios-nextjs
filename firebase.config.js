import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

// var env   = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyDkBsGEOR61FY6lHWkholCFXKu-WcLDIBc",
  authDomain: "filmkatha-studios.firebaseapp.com",
  projectId: "filmkatha-studios",
  storageBucket: "filmkatha-studios.appspot.com",
  messagingSenderId: "697458521124",
  appId: "1:697458521124:web:81ca0f35950d9c258f14b1",
  measurementId: "G-3XMGDS6X66"
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


