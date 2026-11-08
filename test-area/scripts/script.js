const theorem = "Pythgoream theorem";

const a = 5;
const b = 8;

const c = Math.sqrt(a**2 + b**2);

const myString = 
    `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c}.`;

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);