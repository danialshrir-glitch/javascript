const quoteStart = 'Don\'t judge each day by the harvest you reap ';
const quoteEnd = 'But by the harvest you plant.'
const finalQuote = `${quoteStart}${quoteEnd}`;

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);