const recursionPageInput = document.getElementById("recursion-page-input");
const algorithmDropdownMenu = document.getElementById("algorithm-selection");
const calculationTypeDropdownMenu = document.getElementById("calculation-type");
const dataLabel = document.getElementById("calculation-result");

const factorialIterative = num => {
    let res = `${num}! = `;
    if (num === 0) {
        return `${res}1`;
    };
    let factorial = 1;

    for (let i = 1; i < num; i++) {
        res += `${i} * `;
        factorial *= i;
    };

    factorial *= num;
    res += `${num} = ${factorial}`;
    return res;
};

const factorialRecursive = num => {
    return factorialRecursiveCalculation(num, num, "");
};

const factorialRecursiveCalculation = (num, originalNum, res) => {
    if (num === 0 || num === 1) {
        return {
            curFact: 1,
            curNumb: 1,
            curResu: `1`
        };
    };

    const curObj = factorialRecursiveCalculation(num - 1, originalNum, res);
    
    let curFactorial = curObj.curFact;
    let curNum = curObj.curNumb;
    let curRes = curObj.curResu;

    if (curNum === originalNum) {
        return {
            curFact: curFactorial * num,
            curNumb: num,
            curResu: `${originalNum}! = ${curRes} * ${num} = ${curFactorial * num}`
        }
    };

    return {
        curFact: curFactorial * num,
        curNumb: num + 1,
        curResu: `${curRes} * ${num}`
    };
};

const displayResult = () => {
    dataLabel.textContent = "";
    const userInput = recursionPageInput.value;
    const algorithmChosen = algorithmDropdownMenu.value;
    const calculationType = calculationTypeDropdownMenu.value;

    if (userInput === "") {
        return;
    };

    let res = "";
    switch (algorithmChosen) {
        case "factorial":
            switch (calculationType) {
                case "iterative":
                    res = factorialIterative(Number(userInput));
                    break;
                case "recursive":
                    res = factorialRecursive(Number(userInput)).curResu;
                    break;
                default:
                    console.log("");
            };
            break;
        default:
            console.log("");
    };

    dataLabel.textContent = res;
};

recursionPageInput.addEventListener("input", displayResult);
algorithmDropdownMenu.addEventListener("change", displayResult);
calculationTypeDropdownMenu.addEventListener("change", displayResult);