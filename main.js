const navButtons = document.querySelectorAll(".nav-buttons");
const nameHeader = document.getElementById("nameHeader");
const numericalDays = document.querySelectorAll(".days");
const reverseMonth = document.getElementById("reverseMonth");
const forwardMonth = document.getElementById("forwardMonth");

document.addEventListener("DOMContentLoaded", animateIcons);
document.addEventListener("DOMContentLoaded", randomizeColors);

reverseMonth.addEventListener("click", previousMonth);
forwardMonth.addEventListener("click", nextMonth);

navButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        tippy(`#${button.id}`, {
            content: button.ariaPlaceholder,
            placement: "bottom"
        });
    });
});

function animateIcons() {
    sectionOne.classList.add("animation-one");
    sectionTwo.classList.add("animation-two");
    sectionThree.classList.add("animation-three");
};

function randomizeColors() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let generatedNum = Math.random().toString().substring(2,8)
    let combinedNumLetters = letters + generatedNum; 
    let generatedLetters = combinedNumLetters[Math.floor(Math.random() * combinedNumLetters.length)];
    console.log(generatedLetters);
};

function previousMonth(){
    console.log('hello');
};

function nextMonth() {
    console.log("hello2");
};

numericalDays.forEach(days => {
    days.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    });
});