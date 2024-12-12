const toggle = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
   nav.classList.toggle("open");
});

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__card");
const scrollAmount = premierItem.clientWidth;

if (carousel) {

    prevButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
    });
  
    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
      carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
    });
  }

const carousel2 = document.querySelector(".carousel__container2");
const prevButton2 = document.querySelector(".carousel__button--prev2");
const nextButton2 = document.querySelector(".carousel__button--next2");
const premierItem2 = document.querySelector(".carousel__card2");
const scrollAmount2 = premierItem.clientWidth;

if (carousel2) {

    prevButton2.addEventListener("click", () => {
      carousel2.scrollBy({ left: -scrollAmount2, behavior: "smooth" });;
    });
  
    // Scroll au clic sur le bouton suivant
    nextButton2.addEventListener("click", () => {
      carousel2.scrollBy({ left: +scrollAmount2, behavior: "smooth" });;
    });
  }