const reverseButton = document.getElementById("reverse");

const reverseCards = () => {
    const tenCardsString = localStorage.getItem("ten-cards");
    const tenCards = JSON.parse(tenCardsString);

    if (!tenCards) {
        return;
    }

    let section = document.getElementById("ten-cards");
    if (!section) {
        section = document.createElement("section");
        section.id = "ten-cards";
        page.appendChild(section);
    }

    const allDivs = section.querySelectorAll("div");

    for (const div of allDivs) {
        section.removeChild(div);
    }

    console.log(tenCards);
    const reversedTenCards = tenCards.toReversed();
    console.log(reversedTenCards);

    count = 0;
    for (const card of reversedTenCards) {
        const age = card.age;
        const name = card.name;
        const admin = card.admin;
        const grades = card.grades;
        const address = card.address;
        const city = address.city;
        const houseNumber = address.houseNumber;

        const cardBox = document.createElement("div");
        cardBox.className = "card-data";
        cardBox.id = `card-data-${count}`;
        cardBox.style.border = "2px solid black";
        cardBox.style.borderRadius = "10px";
        cardBox.style.width = "fit-content";
        cardBox.style.height = "fit-content";
        cardBox.style.inlineSize = "fit-content";
        cardBox.style.blockSize = "fit-content";
        cardBox.style.marginBottom = "10px";
        cardBox.style.marginRight = "10px";
        cardBox.style.justifyContent = "center";
        cardBox.style.alignItems = "center";
        cardBox.style.position = "relative";

        const ageField = document.createElement("p");
        const nameField = document.createElement("p");
        const adminField = document.createElement("p");
        const gradesField = document.createElement("p");
        const cityField = document.createElement("p");
        const houseNumberField = document.createElement("p");
        
        ageField.textContent = `Age: ${age}`;
        const displayName = `${name[0].toUpperCase()}${name.slice(1)}`;
        nameField.textContent = `Name: ${displayName}`;
        const isAdmin = admin ? "Yes" : "No";
        adminField.textContent = `Is an admin? ${isAdmin}`;

        const displayGrades = grades.join(", ");
        gradesField.textContent = `Grades: ${displayGrades}`;
        
        const cityParts = city.split(" ");
        cityParts.forEach((part, index) => {
            const displayPart = `${part[0].toUpperCase()}${part.slice(1)}`;
            cityParts[index] = displayPart;
        });
        const displayCity = cityParts.join(" ");
        cityField.textContent = `City: ${displayCity}`;
        houseNumberField.textContent = `House Number: ${houseNumber}`;

        cardBox.appendChild(ageField);
        cardBox.appendChild(nameField);
        cardBox.appendChild(adminField);
        cardBox.appendChild(gradesField);
        cardBox.appendChild(cityField);
        cardBox.appendChild(houseNumberField);

        section.appendChild(cardBox);

        count++;
    }
}

reverseButton.addEventListener("click", reverseCards);