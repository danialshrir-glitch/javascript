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

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    a.remove();
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

    const section = document.getElementById("all-cards");
    const cardBox = document.createElement("div");
    cardBox.id = "card";
    cardBox.style.border = "2px solid black";
    cardBox.style.borderRadius = "10px";
    cardBox.style.width = "fit-content";
    cardBox.style.height = "fit-content";
    cardBox.style.inlineSize = "fit-content";
    cardBox.style.blockSize = "fit-content";
    cardBox.style.marginBottom = "10px";
    cardBox.style.marginRight = "10px";
    cardBox.style.justifyContent = "center";
    cardBox.style.alignItems = "center";
    cardBox.style.position = "relative";
    
    const nameField = document.createElement("p");
    const emailField = document.createElement("p");
    nameField.textContent = `Name: ${fullName}`;
    emailField.textContent = `Email: ${email}`;
    cardBox.appendChild(nameField);
    cardBox.appendChild(emailField);

    const delBtn = document.createElement("button");
    delBtn.style.color = "red";
    delBtn.style.position = "absolute";
    delBtn.style.top = "0";
    delBtn.style.right = "0";
    delBtn.style.cursor = "pointer";
    delBtn.style.backgroundColor = "transparent";
    delBtn.style.border = "2px solid black";
    delBtn.style.borderRadius = "10px";
    delBtn.style.display = "none";
    delBtn.textContent = "X";
    
    cardBox.appendChild(delBtn);
    cardBox.addEventListener("mouseleave", () => {
        delBtn.style.display = "none";
    });
    cardBox.addEventListener("mouseenter", () => {
        delBtn.style.display = "block";
    });
    section.appendChild(cardBox);
};

cardCreationButton.addEventListener("click", createNewCard);