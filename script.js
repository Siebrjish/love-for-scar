/* =========================================
   FRIENDSHIP TIMER
   We met:
   27 September 2026
   21:02 Mexico City time (UTC-6)
========================================= */

const meetingDate = new Date(
    "2026-09-27T21:02:00-06:00"
);


/* =========================================
   UPDATE TIMER
========================================= */

function updateTimer() {

    const now = new Date();

    const difference = now - meetingDate;


    // If the meeting time hasn't happened yet
    if (difference < 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    // Convert milliseconds into time units

    const totalSeconds =
        Math.floor(difference / 1000);

    const totalMinutes =
        Math.floor(totalSeconds / 60);

    const totalHours =
        Math.floor(totalMinutes / 60);

    const days =
        Math.floor(totalHours / 24);

    const hours =
        totalHours % 24;

    const minutes =
        totalMinutes % 60;

    const seconds =
        totalSeconds % 60;


    // Put the numbers onto the website

    document.getElementById("days").textContent =
        String(days).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


/* =========================================
   START TIMER
========================================= */

updateTimer();

setInterval(updateTimer, 1000);


/* =========================================
   STAR PARALLAX EFFECT
========================================= */

document.addEventListener("mousemove", function(event) {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;


    const stars =
        document.querySelector(".stars");


    if (stars) {

        stars.style.transform =
            `translate(${x}px, ${y}px)`;

    }

});
