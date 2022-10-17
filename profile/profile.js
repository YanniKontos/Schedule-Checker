const navButtons = document.querySelectorAll(".nav-buttons");
const formHeader = document.getElementById("formHeader");
const bioInformation = document.getElementById("bioInformation");
const configureProfile = document.getElementById("configureProfile");
const userName = document.getElementById("userName");

document.addEventListener("DOMContentLoaded", animateIcons);
configureProfile.addEventListener("click", changeProfile, {once: true});

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

function checkCharacters() {
    console.log(bioInformation.onkeyup);
};

function changeProfile() {
    let inputFields = `
    <form>
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input class="form-control w-25 bg-dark text-light" id="nameInput">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Bio</label>
            <input class="form-control w-25 bg-dark text-light py-4 lh-sm mb-4" id="changedBio">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Location</label>
            <i class="fi fi-rr-marker d-flex align-items-center fs-4 gap-2"><input class="form-control w-25 bg-dark text-light" id="changedBio"></i>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Company</label>
            <i class="fi fi-rr-building d-flex align-items-center fs-4 gap-2"><input class="form-control w-25 bg-dark text-light" id="changedBio"></i>
            </div>
        <button type="submit" class="btn btn-success">Save</button>
        <button type="submit" class="btn btn-danger">Cancel</button>
    </form>
    `;
    formHeader.innerHTML += inputFields;

    nameInput.value = userName.textContent;
    changedBio.value = bioInformation.textContent;
    
    // let userProfileDetails = [{
    //     name: nameInput.value,
    //     bio: changedBio.value
    // }];
};