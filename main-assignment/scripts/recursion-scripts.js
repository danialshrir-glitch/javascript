const recursionPageInput = document.getElementById("recursion-page-input");
const algorithmDropdownMenu = document.getElementById("algorithm-selection");
const calculationTypeDropdownMenu = document.getElementById("calculation-type");

const factorialIterative = num => {
    let res = `${num}! = `;
    let factorial = 1;

    for (let i = 1; i < num; i++) {
        res += `${i} * `;
        factorial *= i;
    };

    factorial *= num;
    res += `${num} = ${factorial}`;
    return res;
};

const factorialRecursive = (num) => {
    return factorialRecursiveCalculation(num, Number(num), "");
};

const factorialRecursiveCalculation = (num, originalNum, res) => {
    if (num === 0 || num === 1) {
        return {
            curFact: 1,
            curNumb: 1,
            curResu: "1"
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
    const userInput = recursionPageInput.value;
    const algorithmChosen = algorithmDropdownMenu.value;
    const calculationType = calculationTypeDropdownMenu.value;

    console.log(factorialRecursive(5));
};

recursionPageInput.addEventListener("input", displayResult);
algorithmDropdownMenu.addEventListener("change", displayResult);
calculationTypeDropdownMenu.addEventListener("change", displayResult);