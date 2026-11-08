const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
    const loweredCity = city.toLowerCase();
    const firstLetter = loweredCity[0];
    const finalResult = loweredCity.replace(firstLetter, firstLetter.toUpperCase());

    const result = finalResult;
    const listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
}