const myArray = [
    "Ryu",
    "Ken",
    "Chun-Li",
    "Cammy",
    "Guile",
    "Sakura",
    "Sagat",
    "Juri"
];

myArray.pop();

myArray.push("Zangief");
myArray.push("Ibuki");

myArray.forEach((element, index) => {
    const newElement = `${element} (${index})`;
    myArray[index] = newElement;
});

const myString = myArray.join(" - ");

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);