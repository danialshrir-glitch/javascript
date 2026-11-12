function showAllCards() {
    let count = 0;
    const storedCardsDataString = localStorage.getItem("cards-data");
    const cards = JSON.parse(storedCardsDataString);

    if (!cards) {
        return;
    };

    const section = document.getElementById("all-cards");

    cards.forEach((card, index) => {
        let name = "",
            email = "";
        if (card.hasOwnProperty("name")) {
            name = card.name;
        };
        if (card.hasOwnProperty("email")) {
            email = card.email;
        };

        const section = document.getElementById("all-cards");
        const cardBox = document.createElement("div");
        cardBox.className = "card";
        cardBox.id = `card-${count}`;
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

        const nameField = document.createElement("p");
        const emailField = document.createElement("p");
        nameField.textContent = `Name: ${name}`;
        emailField.textContent = `Email: ${email}`;
        cardBox.appendChild(nameField);
        cardBox.appendChild(emailField);

        const delBtn = document.createElement("button");
        delBtn.style.color = "red";
        delBtn.style.position = "absolute";
        delBtn.style.top = "0";
        delBtn.style.right = "0";
        delBtn.style.cursor = "pointer";
        delBtn.style.backgroundColor = "transparent";
        delBtn.style.border = "2px solid black";
        delBtn.style.borderRadius = "10px";
        delBtn.style.display = "none";
        delBtn.textContent = "X";

        const cardId = cardBox.id;
        delBtn.addEventListener("click", () => deleteCard(cardId));

        cardBox.appendChild(delBtn);
        cardBox.addEventListener("mouseleave", () => {
            delBtn.style.display = "none";
        });
        cardBox.addEventListener("mouseenter", () => {
            delBtn.style.display = "block";
        });
        section.appendChild(cardBox);
    });
};

showAllCards();