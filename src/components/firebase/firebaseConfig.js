// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoFbrKN-Pjzdx3jSdux25X7GbKuKZifhU",
  authDomain: "sharonvandekamp-3cb77.firebaseapp.com",
  projectId: "sharonvandekamp-3cb77",
  storageBucket: "sharonvandekamp-3cb77.appspot.com",
  messagingSenderId: "126632292958",
  appId: "1:126632292958:web:69584892b133228517bacf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectStorage = getStorage(app);

async function getNames(db) {
  const nameCollection = collection(db, "names");
  const nameSnapshot = await getDocs(nameCollection);
  const nameList = nameSnapshot.docs.map((doc) => doc.data());
  return nameList;
}

export { projectStorage, getNames, db };
