const myArray = ["bear", "wolf", "pigs", "cihckens"];

myArray[0] = "crocodiles";
myArray[1] = "horses";

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);