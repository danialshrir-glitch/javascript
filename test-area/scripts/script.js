const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray[arrayLength - 1]

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);