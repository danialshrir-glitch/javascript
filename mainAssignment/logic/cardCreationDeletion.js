const peopleHonorifics = [
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
    "Esquire",
];
const minNameLen = 2;
const allowedNameChars = /^[a-zA-Z 0-9\s\.\']+$/;
const cardCreationButton = document.querySelector("#cards-creation-deletion-page button");
const creationDeletionForm = document.querySelector("#cards-creation-deletion-page form");
const boxesSection = document.getElementById("all-cards");
const allCards = boxesSection.querySelectorAll("div");
let count = 0;

if (allCards) {
    count = allCards.length;
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;
    return pattern.test(String(email));
}

function startsWithATitle(name) {
    let honorific = String(name).split(" ")[0];
    const firstLetter = honorific[0];
    honorific = `${firstLetter.toUpperCase()}${honorific.slice(1)}`;
    return peopleHonorifics.some((PEOPLE_HONORIFICS) => PEOPLE_HONORIFICS === honorific);
}

function validateName(name) {
    const nameLen = String(name).length;
    return nameLen >= minNameLen && allowedNameChars.test(name);
}

function saveDataFromCards(className) {
    const cardsDataArray = [];
    const cards = document.getElementsByClassName(String(className));

    for (const card of cards) {
        const allParagraphs = card.querySelectorAll("p");
        const namePara = allParagraphs[0].textContent;
        const emailPara = allParagraphs[1].textContent;
        const colonNameIndex = namePara.indexOf(":");
        const name = namePara.slice(colonNameIndex + 2);
        const colonEmailIndex = emailPara.indexOf(":");
        const email = emailPara.slice(colonEmailIndex + 2);
        const cardData = {
            name: name,
            email: email,
        };
        cardsDataArray.push(cardData);
    }

    const cardsDataString = JSON.stringify(cardsDataArray);
    localStorage.setItem("cards-data", cardsDataString);
}

const createNewCard = () => {
    let fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const errorPara = document.getElementById("error-message-creation");
    const DisplayModes = Object.freeze({
        BLOCK: "block",
        NONE: "none",
    });

    if (fullName === "" || email === "") {
        errorPara.textContent = "Not all fields are filled. Please enter input to both fields.";
        errorPara.style.display = "block";
        return;
    }

    if (startsWithATitle(fullName)) {
        const firstSpaceIndex = fullName.indexOf(" ");
        fullName = fullName.slice(firstSpaceIndex + 1);
    }

    if (!validateEmail(email)) {
        errorPara.textContent = "Email field is invalid. Please enter a valid email address.";
        errorPara.style.display = DisplayModes.BLOCK;
        return;
    }

    if (!validateName(fullName)) {
        errorPara.textContent =
            "Name field is invalid. Name should be at least 2 characters long and contain only letters, spaces, dots and apostrophes.";
        errorPara.style.display = DisplayModes.BLOCK;
        return;
    }

    errorPara.textContent = "";
    errorPara.style.display = DisplayModes.NONE;

    count++;
    const section = document.getElementById("all-cards");
    const cardBox = document.createElement("div");
    cardBox.classList.add("card");
    cardBox.id = `card-${count}`;

    const nameField = document.createElement("p");
    const emailField = document.createElement("p");
    nameField.textContent = `Name: ${fullName}`;
    emailField.textContent = `Email: ${email}`;
    cardBox.appendChild(nameField);
    cardBox.appendChild(emailField);

    const delBtn = document.createElement("button");
    delBtn.classList.add("del");
    delBtn.textContent = "X";

    const cardId = cardBox.id;
    delBtn.addEventListener("click", () => deleteCard(cardId));

    cardBox.appendChild(delBtn);
    cardBox.addEventListener("mouseleave", () => {
        delBtn.style.display = "none";
    });
    cardBox.addEventListener("mouseenter", () => {
        delBtn.style.display = "block";
    });
    section.appendChild(cardBox);

    const cardsClassName = cardBox.className;
    saveDataFromCards(cardsClassName);
};

const deleteCard = (cardId) => {
    const requestedCard = document.getElementById(cardId);
    const cardClassName = requestedCard.className;
    requestedCard.remove();

    saveDataFromCards(cardClassName);
};

cardCreationButton.addEventListener("click", createNewCard);
