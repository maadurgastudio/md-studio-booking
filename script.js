emailjs.init("En6E_p-7DMKsGf2eG");


document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();


    let data = {

        name: document.getElementById("name").value,

        mobile: document.getElementById("mobile").value,

        address: document.getElementById("address").value,

        event: document.getElementById("event").value,

        date: document.getElementById("date").value,

        time: document.getElementById("time").value,

        package: document.getElementById("package").value,

        message: document.getElementById("message").value

    };


    localStorage.setItem("bookingData", JSON.stringify(data));


    emailjs.send(
        "service_997eg05",
        "template_vfuq3if",
        data
    )
    .then(function(){

        window.location.href="receipt.html";

    })
    .catch(function(error){

        alert("Email send nahi hua");

        console.log(error);

    });


});
