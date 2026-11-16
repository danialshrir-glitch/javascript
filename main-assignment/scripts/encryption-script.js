const ENGLISH_CHARS_NUMBER = 26;
const firstUpperLetter = "A".charCodeAt(0);
const firstLowerLetter = "a".charCodeAt(0);
const encryptionButton = document.getElementById("encrypt");
const errorLabel = document.getElementById("error-label");

const encryptString = (str, number) => {
    let res = "";

    for (const char of str) {
        if (char === char.toUpperCase()) {
            res += String.fromCharCode((char.charCodeAt(0) + number - firstUpperLetter) % ENGLISH_CHARS_NUMBER + firstUpperLetter);
        } else {
            res += String.fromCharCode((char.charCodeAt(0) + number - firstLowerLetter) % ENGLISH_CHARS_NUMBER + firstLowerLetter);
        };
    };

    return res;
};

const encryptInput = () => {
    errorLabel.textContent = "";
    errorLabel.style.display = "none";
    const encryptionLabel = document.getElementById("encrypted-decrypted-data");
    const userInput = document.getElementById("encryption-decryption-input-string");
    const shiftingsNumber = document.getElementById("number-of-shiftings");

    if (encryptionLabel.style.display === "block") {
        encryptionLabel.textContent = "";
        encryptionLabel.style.display = "none";
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

    const encrypted = encryptString(inputString, shiftsNumber);

    userInput.style.display = "none";
    shiftingsNumber.style.display = "none";
    userInput.value = "";
    shiftingsNumber.value = "";

    encryptionLabel.textContent = encrypted;
    encryptionLabel.style.display = "block";
};

encryptionButton.addEventListener("click", encryptInput);