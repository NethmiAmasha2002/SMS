import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhI9UsNkt8fovpXQP-59TbAPpPUs2pw6Q",
    authDomain: "inventory-management-c4b2b.firebaseapp.com",
    databaseURL: "https://inventory-management-c4b2b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "inventory-management-c4b2b",
    storageBucket: "inventory-management-c4b2b.firebasestorage.app",
    messagingSenderId: "23730616088",
    appId: "1:23730616088:web:cb0c4518f0185d603c906d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
