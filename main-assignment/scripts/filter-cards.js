const ADDRESS_FILTER = "address";
let findButton = document.getElementById("find");

const filterCards = () => {
    const tenCardsString = localStorage.getItem("ten-cards");
    const tenCards = JSON.parse(tenCardsString);

    if (!tenCards) {
        return;
    };

    let section = document.getElementById("ten-cards");
    if (!section) {
        section = document.createElement("section");
        section.id = "ten-cards";
        page.appendChild(section);
    };

    const allDivs = section.querySelectorAll("div");
    for (const div of allDivs) {
        div.style.display = "none";
    };

    let filter = filteringForm.value;
    const userInput = searchBarInput.value;

    tenCards.forEach((card, index) => {
        let cardFilterValue = String(card[filter]);
        if (filter === ADDRESS_FILTER) {
            if (isNaN(userInput)) {
                cardFilterValue = card[filter].city;
            } else {
                cardFilterValue = card[filter].houseNumber;
            };
        };
        const userInputLower = userInput.toLowerCase();
        if (cardFilterValue === userInputLower) {
            const cardId = `card-data-${index}`;
            const cardBox = document.getElementById(cardId);
            cardBox.style.display = "block";
        };
    });
};

findButton.addEventListener("click", filterCards);