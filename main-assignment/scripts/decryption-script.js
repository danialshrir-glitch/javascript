const decryptionButton = document.getElementById("decrypt");

const decryptString = (str, number) => {
    return encryptString(str, ENGLISH_CHARS_NUMBER - number);
};

const decryptInput = () => {
    const decryptionLabel = document.getElementById("encrypted-decrypted-data");
    const userInput = document.getElementById("encryption-decryption-input-string");
    const shiftingsNumber = document.getElementById("number-of-shiftings");

    if (decryptionLabel.style.display === "block") {
        decryptionLabel.textContent = "";
        decryptionLabel.style.display = "none";
        userInput.style.display = "block";
        shiftingsNumber.style.display = "block";
        return;
    };
    
    const inputString = userInput.value;
    const shiftsNumber = Number(shiftingsNumber.value);

    if (shiftsNumber <= 0 || shiftsNumber >= ENGLISH_CHARS_NUMBER) {
        errorLabel.textContent = "Number should be between 1 included to 25 included.";
        errorLabel.style.display = "block";
        return;
    };

    const englishLettersPattern = /[a-zA-Z]/;
    if (!englishLettersPattern.test(inputString) || !shiftsNumber) {
        errorLabel.textContent = "Input text should only contain letters.";
        errorLabel.style.display = "block";
        return;
    };

    const decrypted = decryptString(inputString, shiftsNumber);

    userInput.style.display = "none";
    shiftingsNumber.style.display = "none";
    userInput.value = "";
    shiftingsNumber.value = "";

    decryptionLabel.textContent = decrypted;
    decryptionLabel.style.display = "block";
};

decryptionButton.addEventListener("click", decryptInput);