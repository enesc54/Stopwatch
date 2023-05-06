const startStopBtn = document.querySelector(".start-stop");
const timeTxt = document.querySelector(".time");

let isContinue = false;
let isStopwatch = true;
let min = 0;
let sec = 0;
let interval;

startStopBtn.onclick = function () {
    if (isContinue) {
        isContinue = false;
        clearInterval(interval);
        startStopBtn.children[0].src = "./icons/start.png";
    } else if (!isContinue) {
        startStopBtn.children[0].src = "./icons/pause.png";
        isContinue = true;
        interval = setInterval(isStopwatch ? stopwatch : timer, 1000);
    }
};

function stopwatch() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }

    timeTxt.textContent = `${min < 10 ? "0" + min : min}:${
        sec < 10 ? "0" + sec : sec
    }`;
}

function timer() {}

function reset() {
    min = 0;
    sec = 0;
    clearInterval(interval);
    isContinue = false;
    timeTxt.textContent = "00:00";
    startStopBtn.children[0].src = "./icons/start.png";
}
