let finalResult;
let evenOddResult;

let num1 = 4;
let num2 = 8;
let num3 = 16;
let num4 = 12;

let sumFirstTwoNumbers = num1 + num2;
let differenceLastTwoNumbers = num3 - num4;

finalResult = sumFirstTwoNumbers * differenceLastTwoNumbers;
evenOddResult = finalResult % 2;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck = 
    finalResult === 48 ? `Yes, well done!` : `No it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck = 
    evenOddResult === 0
        ? "The final result is even!"
        : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);