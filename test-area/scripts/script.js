const list = document.querySelector("ul");
const stations = [
    "MAN675847583748sjt567654;Manchester Piccadilly",
    "GNF576746573fhdg4737dh4;Greenfield",
    "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
    "SYB4f65hf75f736463;Stalybridge",
    "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
    const code = station.slice(0, 3);
    const name = station.slice(station.indexOf(";") + 1);
    const realStation = `${code}: ${name}`

    const result = realStation;
    const listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
}