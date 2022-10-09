const numericalDays = document.querySelectorAll(".days");
const reverseMonth = document.getElementById("reverseMonth");
const forwardMonth = document.getElementById("forwardMonth");

reverseMonth.addEventListener("click", previousMonth);
forwardMonth.addEventListener("click", nextMonth);

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