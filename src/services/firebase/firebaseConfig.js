import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUHIfi8SnORdvyRwCtdCd7KS-uJDUj0X8",
  authDomain: "myapp-react-ee359.firebaseapp.com",
  projectId: "myapp-react-ee359",
  storageBucket: "myapp-react-ee359.appspot.com",
  messagingSenderId: "243961720356",
  appId: "1:243961720356:web:8348e3e0be0c4fff3872b1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const MisProductos = collection(db, 'MisProductos');
