const PAGE_ID_HEADER_LEN = 5;

const navBtnsList = document.querySelectorAll("header button");

const hidePreviousShowNew = e => {
    const curId = e.target.id;

    for (const button of navBtnsList) {
        const curButtonId = button.getAttribute("id");
        const pageId = curButtonId.slice(PAGE_ID_HEADER_LEN);
        const matchingElement = document.getElementById(pageId);
        matchingElement.style.display = 
            (curButtonId === curId) ? "block" : "none";
    };
};

for (const button of navBtnsList) {
    button.addEventListener("click", hidePreviousShowNew);
};