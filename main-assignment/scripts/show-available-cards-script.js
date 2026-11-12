function showAllCards() {
    const storedCardsDataString = localStorage.getItem("cards-data");
    const cards = JSON.parse(storedCardsDataString);

    if (!cards) {
        return;
    };

    const section = document.getElementById("all-cards");

    cards.forEach((card, index) => {
        console.log(card, index);
    });
};

showAllCards();