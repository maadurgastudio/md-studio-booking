import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAe8C9Fl8ijLiNSklXzO3ChGRdr8f9HdY8",
  authDomain: "md-studio-f2427.firebaseapp.com",
  projectId: "md-studio-f2427",
  storageBucket: "md-studio-f2427.firebasestorage.app",
  messagingSenderId: "47390520461",
  appId: "1:47390520461:web:5cf24adf1f17b73a1c1ec4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
