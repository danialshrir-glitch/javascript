const list = document.querySelector("ul");
const greetings = [
    "Happy birthday!",
    "Merry Christmas my love",
    "A happy Christmas to all the family",
    "You're all I want for Christmas",
    "Get well soon"
];

for (const greeting of greetings) {
    if (greeting.includes("Christmas")) {
        const listItem = document.createElement("li");
        listItem.textContent = greeting;
        list.appendChild(listItem);
    }
}