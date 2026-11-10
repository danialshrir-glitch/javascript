const MID_DAY_HOUR = 12;

function updateClock() {
    const myDate = new Date();

    let [hours, minutes, seconds] = [
        myDate.getHours(), 
        myDate.getMinutes(), 
        myDate.getSeconds()
    ];

    const ampm = hours >= MID_DAY_HOUR ? "PM" : "AM";

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = currentTime;
};

function updateDate() {
    const myDate = new Date();

    let [day, month, year] = [
        myDate.getDay(),
        myDate.getMonth(),
        myDate.getFullYear()
    ];

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const curDate = `${day}/${month}/${year}`;
    dateElement = document.getElementById("date");
    dateElement.textContent = curDate
};

updateClock();
setInterval(updateClock, 1000);

updateDate();
setInterval(updateDate, 1000);