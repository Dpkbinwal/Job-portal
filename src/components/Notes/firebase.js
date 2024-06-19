import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // Your Credentials
    apiKey: "AIzaSyD6iPdiOXENczW5epEXH2WGQiUZuvHyNyw",
    authDomain: "jobportal-ea197.firebaseapp.com",
    projectId: "jobportal-ea197",
    storageBucket: "jobportal-ea197.appspot.com",
    messagingSenderId: "311983348024",
    appId: "1:311983348024:web:c2e24d7eb77db8f27189cd",
    measurementId: "G-VNS809PHNJ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;