const MIN_PASSWORD_LENGTH = 8;

const availableAlgorithms = document.getElementById("available-algorithms");
const userInput = document.getElementById("algorithm-input");

const isPalindrome = str => {
    return str === str.split("").reverse().join("");
};

const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= boundary; i++) {
        if (num % i === 0) {
            return false;
        };
    };
    return num > 1;
};

const isValidPassword = password => {
    const oneUpperOneLowerOneDigit = /[a-zA-Z0-9]/;
    const oneSpecialChar = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    return password.length >= MIN_PASSWORD_LENGTH && oneUpperOneLowerOneDigit.test(password) && oneSpecialChar.test(password);
};

const checkAlgorithm = () => {
    const chosenAlgorithm = availableAlgorithms.value;
    const input = userInput.value;
    console.log(input);

    switch (chosenAlgorithm) {
        case "palindrome":
            if (isPalindrome(input)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            };
        case "prime":
            if (isNaN(Number(input))) {
                return false;
            };
            const numToCheck = Number(input);
            if (isPrime(numToCheck)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            };
        case "password":
            if (isValidPassword(input)) {
                userInput.style.color = "green";
            } else {
                userInput.style.color = "red";
            };
        default:
            console.log("");
    };
};

availableAlgorithms.addEventListener("change", checkAlgorithm);
userInput.addEventListener("input", checkAlgorithm);