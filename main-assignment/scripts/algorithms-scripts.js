const MIN_PASSWORD_LENGTH = 8;
const MAX_CHAR = 256;

const availableAlgorithms = document.getElementById("available-algorithms");
const userInput = document.getElementById("algorithm-input");

const isPalindrome = str => {
    return str === str.split("").reverse().join("");
}

const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= boundary; i++) {
        if (num % i === 0) {
            return false;
        };
    };
    return num > 1;
}

const isValidPassword = password => {
    const oneUpperOneLowerOneDigit = /[a-zA-Z0-9]/;
    const oneSpecialChar = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    return password.length >= MIN_PASSWORD_LENGTH && oneUpperOneLowerOneDigit.test(password) && oneSpecialChar.test(password);
}

const isUnique = str => {
    if (str.length > MAX_CHAR) {
        return false;
    }

    const chars = new Array(MAX_CHAR);
    for (let i = 0; i < MAX_CHAR; i++) {
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
}

const checkAlgorithm = () => {
    const chosenAlgorithm = availableAlgorithms.value;
    const input = userInput.value;

    switch (chosenAlgorithm) {
        case "palindrome":
            if (isPalindrome(input)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            }
            return;
        case "prime":
            if (isNaN(Number(input))) {
                userInput.style.color = "red";
            }
            const numToCheck = Number(input);
            if (isPrime(numToCheck)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            }
            return;
        case "password":
            if (isValidPassword(input)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            }
            return;
        case "unique":
            if (isUnique(input)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            }
            return;
        default:
            console.log("");
    }
}

availableAlgorithms.addEventListener("change", checkAlgorithm);
userInput.addEventListener("input", checkAlgorithm);