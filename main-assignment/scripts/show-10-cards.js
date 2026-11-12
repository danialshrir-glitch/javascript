const TEN_CARDS = [
    {
        "age": 16,
        "name": "yossi",
        "admin": true,
        "grades": [
            20,
            23,
            50,
            30
        ],
        "address": {
            "city": "ashdod",
            "houseNumber": 12
        }
    },
    {
        "age": 25,
        "name": "yael",
        "admin": false,
        "grades": [
            50,
            16,
            100,
            78
        ],
        "address": {
            "city": "ashdod",
            "houseNumber": 8
        }
    },
    {
        "age": 22,
        "name": "idan",
        "admin": false,
        "grades": [
            100,
            100,
            100,
            30
        ],
        "address": {
            "city": "tel aviv",
            "houseNumber": 40
        }
    },
    {
        "age": 29,
        "name": "yarden king",
        "admin": true,
        "grades": [
            99,
            99,
            99,
            99
        ],
        "address": {
            "city": "kfar bialik",
            "houseNumber": 1
        }
    },
    {
        "age": 34,
        "name": "banu",
        "admin": true,
        "grades": [
            100,
            100,
            100,
            100
        ],
        "address": {
            "city": "ashdod",
            "houseNumber": 16
        }
    },
    {
        "age": 57,
        "name": "nabetjs",
        "admin": false,
        "grades": [
            3,
            16,
            0,
            30
        ],
        "address": {
            "city": "tel aviv",
            "houseNumber": 12
        }
    },
    {
        "age": 15,
        "name": "rongular",
        "admin": true,
        "grades": [
            92,
            87,
            69,
            84
        ],
        "address": {
            "city": "yafo",
            "houseNumber": 12
        }
    },
    {
        "age": 10,
        "name": "david",
        "admin": false,
        "grades": [
            20,
            23,
            50,
            30
        ],
        "address": {
            "city": "ashdod",
            "houseNumber": 12
        }
    },
    {
        "age": 66,
        "name": "liad",
        "admin": false,
        "grades": [
            92,
            76,
            77,
            82
        ],
        "address": {
            "city": "beit dagan",
            "houseNumber": 112
        }
    },
    {
        "age": 34,
        "name": "happy",
        "admin": true,
        "grades": [
            54,
            23,
            100,
            30
        ],
        "address": {
            "city": "beit dagan",
            "houseNumber": 112
        }
    }
]

function show10CardsData(cards) {
    let count = 0;

    for (const card of cards) {
        const age = card.age;
        const name = card.name;
        const admin = card.admin;
        const grades = card.grades;
        const address = card.address;
        const city = address.city;
        const houseNumber = address.houseNumber;

        const section = document.getElementById("ten-cards");
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
        gradesField.textContent = `Grades: ${grades}`;
        
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
    };
};

show10CardsData(TEN_CARDS);