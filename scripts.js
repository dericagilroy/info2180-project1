"use strict";

window.addEventListener("DOMContentLoaded", function() {subscribe()});

function subscribe() {
    document.getElementsByClassName("btn")[1].addEventListener("click", authenticate);
}

function authenticate(event) {
    event.preventDefault();

    if (document.getElementById("email").value == "") {
        document.getElementsByClassName("message")[0].textContent = "Please enter a valid email address.";
    }
    else {
        document.getElementsByClassName("message")[0].textContent = "Thank you! Your email address <" + document.getElementById("email").value + "> has been added to our mailing list!";
    }
}