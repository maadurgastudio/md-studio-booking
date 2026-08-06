document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.querySelector("input[type='text']").value;
let mobile = document.querySelector("input[type='number']").value;
let date = document.querySelector("input[type='date']").value;

alert(
"Booking Received\n\n" +
"Name: " + name +
"\nMobile: " + mobile +
"\nDate: " + date +
"\n\nMD Studio Booking"
);

});
