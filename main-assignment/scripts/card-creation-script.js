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
const MIN_NAME_LEN = 2;
const ALLOWED_NAME_CHARS = /^[a-zA-Z 0-9\s\.\']+$/;

const cardCreationButton = document.querySelector("#cards-creation-deletion-page button");
const creationDeletionForm = document.querySelector("#cards-creation-deletion-page form")

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;
    return pattern.test(String(email));
};

function startsWithATitle(name) {
    let honorific = String(name).split(" ")[0];
    const firstLetter = honorific[0];
    honorific = `${firstLetter.toUpperCase()}${honorific.slice(1)}`;
    return PEOPLE_HONORIFICS.some(PEOPLE_HONORIFICS => PEOPLE_HONORIFICS === honorific);
};

function validateName(name) {
    const nameLen = String(name).length;
    return nameLen >= MIN_NAME_LEN && ALLOWED_NAME_CHARS.test(name);
};

const createNewCard = () => {
    let fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const parentNode = creationDeletionForm.parentNode;
    const nextSibling = creationDeletionForm.nextSibling;

    if (fullName === "" || email === "") {
        const para1 = document.createElement("p");
        para1.textContent = "Not all fields are filled. Please enter input to both fields.";
        parentNode.insertBefore(para1, nextSibling);
        parentNode.removeChild(nextSibling);
        return;
    };

    if (startsWithATitle(fullName)) {
        const firstSpaceIndex = fullName.indexOf(" ");
        fullName = fullName.slice(firstSpaceIndex + 1);
        console.log(fullName);
    };

    if (!validateEmail(email)) {
        const para1 = document.createElement("p");
        para1.textContent = "Email field is invalid. Please enter a valid email address.";
        parentNode.insertBefore(para1, nextSibling);
        parentNode.removeChild(nextSibling);
        return;
    };

    if (!validateName(fullName)) {
        const para1 = document.createElement("p");
        para1.textContent = "Name field is invalid. Name should be at least 2 characters long and contain only letters, spaces, dots and apostrophes.";
        parentNode.insertBefore(para1, nextSibling);
        parentNode.removeChild(nextSibling);
        return;
    };

    if (nextSibling instanceof Element) {
        parentNode.removeChild(nextSibling);
    };
};

cardCreationButton.addEventListener("click", createNewCard);