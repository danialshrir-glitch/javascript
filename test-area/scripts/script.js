const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
if (eaglesIndex > -1) {
    birds.splice(eaglesIndex, 1);
};

const eBirds = [];

for (const bird of birds) {
    if (bird.startsWith("E")) {
        eBirds.push(bird);
    };
};

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);