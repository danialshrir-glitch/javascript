const PEOPLE_HONORIFICS = [
    "Mr.",
    "Mister",
    "Mrs.",
    "Miss", 
    "Ms.",
    "Dr.",
    "Doctor",
    "Prof.",
    "Professor", 
    "Esq.",
    "Esquire"
];

const cardCreationButton = document.querySelector("#cards-creation-deletion-page button");
const creationDeletionForm = document.querySelector("#cards-creation-deletion-page form")

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;
    return pattern.test(email);
};

function startsWithATitle(name) {
    return PEOPLE_HONORIFICS.some(PEOPLE_HONORIFICS => name.startsWith(PEOPLE_HONORIFICS));
};

function validateName(name) {

};

const createNewCard = () => {
    let fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;

    if (fullName === "" || email === "") {
        const para1 = document.createElement("p");
        para1.textContent = "Not all fields are filled. Please enter input to both fields.";
        creationDeletionForm.parentNode.insertBefore(para1, creationDeletionForm.nextSibling);
        return;
    };

    const prevError = document.getElementById(".error-message");
    if (prevError.value !== "") {
        prevError.style.display = "none";
        prevError.value = "";
    };

    if (startsWithATitle(fullName)) {
        const firstSpaceIndex = fullName.indexOf(" ");
        fullName = fullName.slice(firstSpaceIndex + 1);
        console.log(fullName);
    };

    if (!validateEmail(email)) {
        const para1 = document.createElement(".error-message");
        para1.textContent = "Email field is invalid. Please enter a valid email address.";
        creationDeletionForm.parentNode.insertBefore(para1, creationDeletionForm.nextSibling);
        return;
    };
};

cardCreationButton.addEventListener("click", createNewCard);