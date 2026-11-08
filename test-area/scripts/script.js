const eleWeight = 1000;
const mouseWeight = 2;

const ostrichHeight = 2;
const duckHeight = 0.3;

const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

const weightTest = weightComparison
    ? "True — elephants do weigh less than mice!?"
    : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
    ? "True — an ostrich is indeed taller than a duck!"
    : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
    ? "True — the passwords match."
    : "False — the passwords do not match; please check them";

para1.textContent = weightTest;
para2.textContent = heightTest;
para3.textContent = pwdTest;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);