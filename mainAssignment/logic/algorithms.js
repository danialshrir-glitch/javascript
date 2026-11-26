const minPasswordLength = 8;
const maxChar = 256;
const availableAlgorithms = document.getElementById("available-algorithms");
const userInput = document.getElementById("algorithm-input");
const Algorithms = Object.freeze({
    PALINDROME: "palindrome",
    PRIME: "prime",
    PASSWORD: "password",
    UNIQUE: "unique",
});
const Colors = Object.freeze({
    RED: "red",
    GREEN: "green",
});

const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
};

const isPrime = (num) => {
    const boundary = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= boundary; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
};

const isValidPassword = (password) => {
    const oneUpperOneLowerOneDigit = /[a-zA-Z0-9]/;
    const oneSpecialChar = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

    return (
        password.length >= minPasswordLength && oneUpperOneLowerOneDigit.test(password) && oneSpecialChar.test(password)
    );
};

const isUnique = (str) => {
    if (str.length > maxChar) {
        return false;
    }

    const chars = new Array(maxChar);
    for (let i = 0; i < maxChar; i++) {
        chars[i] = false;
    }

    for (let i = 0; i < str.length; i++) {
        const index = str[i].charCodeAt();

        if (chars[index] === true) {
            return false;
        }

        chars[index] = true;
    }

    return true;
};

const isValid = (algorithm, input) => {
    switch (algorithm) {
        case Algorithms.PALINDROME:
            return isPalindrome(input);
        case Algorithms.PRIME:
            return !isNaN(Number(input)) && isPrime(Number(input));
        case Algorithms.PASSWORD:
            return isValidPassword(input);
        case Algorithms.UNIQUE:
            return isUnique(input);
        default:
            return false;
    }
};

const checkAlgorithm = () => {
    const chosenAlgorithm = availableAlgorithms.value;
    const input = userInput.value;
    userInput.style.color = isValid(chosenAlgorithm, input) ? Colors.GREEN : Colors.RED;
};

availableAlgorithms.addEventListener("change", checkAlgorithm);
userInput.addEventListener("input", checkAlgorithm);
