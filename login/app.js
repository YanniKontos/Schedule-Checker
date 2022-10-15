const formSubmitBtn = document.getElementById("formSubmitBtn");
const formInput = document.getElementById("formInput");
const formInputOne = document.getElementById("formInputOne");
const formInputTwo = document.getElementById("formInputTwo");

let loginArr = [];

formSubmitBtn.addEventListener("click", (e) => {
    const defaultUser = "dontcallkickbuttbenjiat3am";
    const defaultPass = "heheheha";

    formValidation();
    e.preventDefault();

    formInputOne.value === defaultUser ? loginArr.push(defaultUser) : null;
    formInputTwo.value === defaultPass ? loginArr.push(defaultPass) : null;
    
   loginArr.includes(defaultUser && defaultPass) ? location.href = "/landing/landing.html" : null;
    
});

function formValidation() {
    if (formInputOne.value === "" || formInputTwo.value === "") {
        formInputOne.classList.add("is-invalid");
        formInputTwo.classList.add("is-invalid");
    }
    
    else {
        formInputOne.classList.remove("is-invalid");
        formInputTwo.classList.remove("is-invalid");
    };
};