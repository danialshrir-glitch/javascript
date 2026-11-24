const MIN_NAME_LENGTH = 2;

const filteringForm = document.getElementById("filter-select");
const searchBarInput = document.getElementById("search-bar");
let findButton = document.getElementById("find");

function isAllowed(chosenValue, userInput) {
    const pattern = /[a-zA-Z\s]+$/;
    switch(chosenValue) {
        case "age":
            return userInput !== "" && !isNaN(Number(userInput));
        case "name":
            return userInput.length >= MIN_NAME_LENGTH && userInput.match(pattern);
        case "admin":
            return userInput === "true" || userInput === "false";
        case "grades":
            return userInput !== "" && !isNaN(Number(userInput));
        case "address":
            return (userInput !== "" && userInput.match(pattern)) || (userInput !== "" && !isNaN(Number(userInput)));
        default:
            return false;
    }
}

const enableButton = () => {
    const chosenValue = filteringForm.value;
    const userInput = searchBarInput.value;

    const allowed = isAllowed(chosenValue, userInput);
    findButton.disabled = !allowed;
}

enableButton();
filteringForm.addEventListener("change", enableButton);
searchBarInput.addEventListener("input", enableButton);