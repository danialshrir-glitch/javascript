const recursionPageInput = document.getElementById("recursion-page-input");
const algorithmDropdownMenu = document.getElementById("algorithm-selection");
const calculationTypeDropdownMenu = document.getElementById("calculation-type");
const dataLabel = document.getElementById("calculation-result");

const factorialIterative = num => {
    let res = `${num}! = `;
    if (num === 0) {
        return `${res}1`;
    }
    let factorial = 1;

    for (let i = 1; i < num; i++) {
        res += `${i} * `;
        factorial *= i;
    }

    factorial *= num;
    res += `${num} = ${factorial}`;
    return res;
}

const factorialRecursive = num => {
    return factorialRecursiveCalculation(num, num, "").curResu;
}

const factorialRecursiveCalculation = (num, originalNum, res) => {
    if (num === 0 || num === 1) {
        return {
            curFact: 1,
            curNumb: 1,
            curResu: `1`
        }
    }

    const curObj = factorialRecursiveCalculation(num - 1, Number(originalNum), res);
    let curFactorial = curObj.curFact;
    let curRes = curObj.curResu;

    if (num === originalNum) {
        return {
            curFact: curFactorial * num,
            curNumb: num,
            curResu: `${originalNum}! = ${curRes} * ${num} = ${curFactorial * num}`
        }
    }

    return {
        curFact: curFactorial * num,
        curNumb: num + 1,
        curResu: `${curRes} * ${num}`
    }
}

const fibonacciIterative = num => {
    let res = "";
    let num1 = 0, num2 = 1;
    
    for (let i = 0; i < num - 1; i++) {
        res += `${num1}, `;
        let temp = num2;
        num2 += num1;
        num1 = temp;
    }

    res += `${num1}`;
    return res;
}

const fibonacciRecursive = num => {
    return fibonacciRecursiveCalculation(num).slice(0, -1).join(", ");
}

const fibonacciRecursiveCalculation = num => {
    if (num === 0) {
        return [0];
    }

    if (num === 1) {
        return [0 ,1];
    }

    const arr = fibonacciRecursiveCalculation(num - 1);
    return [...arr, arr[num - 1] + arr[num - 2]];
}

const displayResult = () => {
    dataLabel.textContent = "";
    const userInput = recursionPageInput.value;
    const algorithmChosen = algorithmDropdownMenu.value;
    const calculationType = calculationTypeDropdownMenu.value;

    if (userInput === "") {
        return;
    }

    let res = "";
    switch (algorithmChosen) {
        case "factorial":
            switch (calculationType) {
                case "iterative":
                    res = factorialIterative(userInput);
                    break;
                case "recursive":
                    res = factorialRecursive(userInput);
                    break;
                default:
                    console.log("");
            }
            break;
        case "fibonacci":
            switch (calculationType) {
                case "iterative":
                    res = fibonacciIterative(userInput);
                    break;
                case "recursive":
                    res = fibonacciRecursive(userInput);
                    break;
                default:
                    console.log("");
            }
            break;
        default:
            console.log("");
    }

    dataLabel.textContent = res;
}

recursionPageInput.addEventListener("input", displayResult);
algorithmDropdownMenu.addEventListener("change", displayResult);
calculationTypeDropdownMenu.addEventListener("change", displayResult);