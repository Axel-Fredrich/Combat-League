"use strict";

// Hamburger Menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


//Öffnen
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//Schließen
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))

