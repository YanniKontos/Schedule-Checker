const navButtons = document.querySelectorAll(".nav-buttons");
const bioInformation = document.getElementById("bioInformation");
const bioChange = document.getElementById("bioChange");

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

