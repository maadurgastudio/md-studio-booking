import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAe8C9Fl8ijLiNSklXzO3ChGRdr8f9HdY8",
  authDomain: "md-studio-f2427.firebaseapp.com",
  projectId: "md-studio-f2427",
  storageBucket: "md-studio-f2427.firebasestorage.app",
  messagingSenderId: "47390520461",
  appId: "1:47390520461:web:5cf24adf1f17b73a1c1ec4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



document.querySelector("form").addEventListener("submit", async function(e){

e.preventDefault();


let name = document.querySelector("input[type='text']").value;
let mobile = document.querySelector("input[type='number']").value;
let date = document.querySelector("input[type='date']").value;


let selects = document.querySelectorAll("select");

let eventType = selects[0].value;
let packageName = selects[1].value;


let prices = {
"4K Videography":"10000",
"DSLR Photography":"8000",
"Drone Shoot":"8000",
"4K + DSLR":"16999",
"4K + Drone":"16999",
"DSLR + Drone":"14999",
"4K + DSLR + Drone":"24999"
};


let price = prices[packageName];


let bookingId = "MD" + Math.floor(Math.random()*100000);



await addDoc(collection(db,"bookings"),{

bookingId: bookingId,
name: name,
mobile: mobile,
date: date,
event: eventType,
package: packageName,
price: price

});


localStorage.setItem("bookingId",bookingId);
localStorage.setItem("name",name);
localStorage.setItem("mobile",mobile);
localStorage.setItem("date",date);
localStorage.setItem("package",packageName);
localStorage.setItem("price",price);


window.location.href="receipt.html";


});
