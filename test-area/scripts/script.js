const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

// Part 1
const products = [
    "Underpants:6.99",
    "Socks:5.99",
    "T-shirt:14.99",
    "Trousers:31.99",
    "Shoes:23.99"
];

// Part 2
for (const product of products) {
    // Part 3
    const colonPosition = product.indexOf(":");
    
    const name = product.slice(0, colonPosition);
    const priceText = product.slice(colonPosition + 1);
    const price = Number(priceText);

    // Part 4
    total += price;

    // Part 5
    let itemText = `${name} — $${price}`;

    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);

    // Part 6
}

totalBox.textContent = `Total: $${total.toFixed(2)};`;