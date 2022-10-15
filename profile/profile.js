const navButtons = document.querySelectorAll(".nav-buttons");

document.addEventListener("DOMContentLoaded", animateIcons);

function animateIcons() {
    sectionOne.classList.add("animation-one");
    sectionTwo.classList.add("animation-two");
    sectionThree.classList.add("animation-three");
};

navButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        tippy(`#${button.id}`, {
            content: button.ariaPlaceholder,
            placement: "bottom"
        });
    });
});