document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.querySelector("input[type='text']").value;
let mobile = document.querySelector("input[type='number']").value;
let date = document.querySelector("input[type='date']").value;

let selects = document.querySelectorAll("select");

let eventType = selects[0].value;
let packageName = selects[1].value;


let prices = {
"4K Videography":10000,
"DSLR Photography":8000,
"Drone Shoot":8000,
"4K + DSLR":16999,
"4K + Drone":16999,
"DSLR + Drone":14999,
"4K + DSLR + Drone":24999
};


let price = prices[packageName] || 0;


let bookingId = "MD" + Math.floor(Math.random()*100000);


localStorage.setItem("bookingId",bookingId);
localStorage.setItem("name",name);
localStorage.setItem("mobile",mobile);
localStorage.setItem("date",date);
localStorage.setItem("package",packageName);
localStorage.setItem("price",price);


window.location.href="receipt.html";

});
