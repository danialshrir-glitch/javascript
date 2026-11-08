const quote = "I dO nOT lIke gREen eGgS anD HAM";

const firstLetter = quote[0];
const rest = quote.slice(1).toLowerCase();
const hatedFood = "pickled onions";

let fixedQuote = `${firstLetter}${rest}`;
fixedQuote = fixedQuote.replace("green eggs with ham", hatedFood);
const finalQuote = `${fixedQuote}.`;

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);