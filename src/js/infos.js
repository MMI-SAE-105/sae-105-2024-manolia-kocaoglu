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