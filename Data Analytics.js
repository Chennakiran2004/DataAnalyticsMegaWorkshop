let plusIconEl = document.getElementById("plusIcon");
let plusIcon1El = document.getElementById("plusIcon1");
let plusIcon2El = document.getElementById("plusIcon2");
let plusIcon3El = document.getElementById("plusIcon3");
let plusIcon4El = document.getElementById("plusIcon4");
let plusIcon5El = document.getElementById("plusIcon5");
let plusIcon6El = document.getElementById("plusIcon6");
let plusIcon7El = document.getElementById("plusIcon7");





function rotateIcon() {
    plusIconEl.classList.toggle("rotate");
}

function rotateIcon1() {
    plusIcon1El.classList.toggle("rotate");
}

function rotateIcon2() {
    plusIcon2El.classList.toggle("rotate");
}

function rotateIcon3() {
    plusIcon3El.classList.toggle("rotate");
}

function rotateIcon4() {
    plusIcon4El.classList.toggle("rotate");
}

function rotateIcon5() {
    plusIcon5El.classList.toggle("rotate");
}

function rotateIcon6() {
    plusIcon6El.classList.toggle("rotate");
}

function rotateIcon7() {
    plusIcon7El.classList.toggle("rotate");
}








function updateTimer() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let days = parseInt(daysElement.innerText);
    let hours = parseInt(hoursElement.innerText);
    let minutes = parseInt(minutesElement.innerText);
    let seconds = parseInt(secondsElement.innerText);

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    clearInterval(timerInterval);
                    document.getElementById('timer').innerHTML = "Timer expired!";
                    return;
                }
            }
        }
    }

    // Update the timer display
    daysElement.innerText = days < 10 ? "0" + days : days;
    hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Update the timer every second
let timerInterval = setInterval(updateTimer, 1000);