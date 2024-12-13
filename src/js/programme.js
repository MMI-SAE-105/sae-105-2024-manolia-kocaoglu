const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    if (isOpen) {
      page.style.overflow = "hidden";
    } else {
      page.style.overflow = "";
    }
  });
}

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__card");
const scrollAmount = premierItem.clientWidth;

if (carousel) {

    prevButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
    });
  
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
  
    nextButton2.addEventListener("click", () => {
      carousel2.scrollBy({ left: +scrollAmount2, behavior: "smooth" });;
    });
  }

const carousel3 = document.querySelector(".carousel__container3");
const prevButton3 = document.querySelector(".carousel__button--prev3");
const nextButton3 = document.querySelector(".carousel__button--next3");
const premierItem3 = document.querySelector(".carousel__card3");
const scrollAmount3 = premierItem.clientWidth;

if (carousel3) {

    prevButton3.addEventListener("click", () => {
      carousel3.scrollBy({ left: -scrollAmount3, behavior: "smooth" });;
    });
  
    nextButton3.addEventListener("click", () => {
      carousel3.scrollBy({ left: +scrollAmount3, behavior: "smooth" });;
    });
  }

  const carousel4 = document.querySelector(".carousel__container4");
const prevButton4 = document.querySelector(".carousel__button--prev4");
const nextButton4 = document.querySelector(".carousel__button--next4");
const premierItem4 = document.querySelector(".carousel__card4");
const scrollAmount4 = premierItem.clientWidth;

if (carousel4) {

    prevButton4.addEventListener("click", () => {
      carousel4.scrollBy({ left: -scrollAmount4, behavior: "smooth" });;
    });
  
    nextButton4.addEventListener("click", () => {
      carousel4.scrollBy({ left: +scrollAmount4, behavior: "smooth" });;
    });
  }