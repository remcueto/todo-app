import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZqpCqPI1MvFA8ZJIgnRBejYum8D0E5yA",
  authDomain: "todo-app-cueto.firebaseapp.com",
  databaseURL: "https://todo-app-cueto-default-rtdb.firebaseio.com",
  projectId: "todo-app-cueto",
  storageBucket: "todo-app-cueto.appspot.com",
  messagingSenderId: "146641890362",
  appId: "1:146641890362:web:5b42effb7bc5eb3bda5903",
  measurementId: "G-4P3C61BE3H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };