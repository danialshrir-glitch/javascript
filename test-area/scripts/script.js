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

for (const name of myArray) {
    const nameIndex = myArray.indexOf(name);
    myArray[nameIndex] = `${name} (${nameIndex})`;
};

const myString = myArray.join(" - ");

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);