const ADDRESS_FILTER = "address";
const GRADES_FILTER = "grades";
findButton = document.getElementById("find");

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
        let cardFilterValue = card[filter];
        if (filter === GRADES_FILTER) {
            cardFilterValue = cardFilterValue.reduce((acc, a) => acc + a, 0) / card[filter].length;
            console.log(cardFilterValue);
        }
        if (filter === ADDRESS_FILTER) {
            if (isNaN(userInput)) {
                cardFilterValue = cardFilterValue.city;
            } else {
                cardFilterValue = cardFilterValue.houseNumber;
            };
        };

        const userInputLower = userInput.toLowerCase();

        const avgSmallerThanInput = Number(userInput) < cardFilterValue;
        if (cardFilterValue === userInputLower || avgSmallerThanInput) {
            const cardId = `card-data-${index}`;
            const cardBox = document.getElementById(cardId);
            cardBox.style.display = "block";
        };
    });
};

findButton.addEventListener("click", filterCards);