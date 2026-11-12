const MIN_NAME_LENGTH = 2;

const filteringForm = document.getElementById("filter-select");
const searchBarInput = document.getElementById("search-bar");
const findButton = document.getElementById("find");

function isAllowed(chosenValue, userInput) {
    const pattern = /[a-zA-Z]+$/;
    switch(chosenValue) {
        case "age":
            return userInput !== "" && !Number.isNaN(userInput);
        case "name":
            return userInput.length >= MIN_NAME_LENGTH && userInput.match(pattern);
        case "admin":
            return userInput === "true";
        case "grades":
            return userInput !== "" && !isNaN(userInput);
        case "address":
            return (userInput !== "" && pattern.test(userInput)) || (userInput !== "" && !Number.isNaN(userInput));
    };
};

const enableButton = () => {
    const chosenValue = filteringForm.value;
    const userInput = searchBarInput.value;

    const allowed = isAllowed(chosenValue, userInput);
    console.log(allowed);
};

enableButton();
filteringForm.addEventListener("change", enableButton);
searchBarInput.addEventListener("input", enableButton);