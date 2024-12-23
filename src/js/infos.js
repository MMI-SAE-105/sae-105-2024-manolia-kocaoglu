const faqAccordeon = document.querySelector(".faq__accordeon");

faqAccordeon.addEventListener("click", (event) => {
    if (event.target.tagName === "SUMMARY") {
        faqAccordeon.querySelectorAll("details").forEach((detail) => {
            if (detail !== event.target.parentElement) {
                detail.open = false; // Ferme les autres accordéons
            }
        });
    }
});

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