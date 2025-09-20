import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDbCtu0p-YM3oyrxHY0wBXXEm03Cr7lHXg",
    authDomain: "olx-clone-4eff5.firebaseapp.com",
    projectId: "olx-clone-4eff5",
    storageBucket: "olx-clone-4eff5.firebasestorage.app",
    messagingSenderId: "291757408310",
    appId: "1:291757408310:web:12e7141feb89e2c10ad897",
    measurementId: "G-3N629J88BX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.useDeviceLanguage();

export { auth, provider, app };
