/* =================================
   FRIENDSHIP TIMER
================================= */

/*
   We will replace this with the exact
   date + time once we decide it.

   Format:
   YEAR, MONTH, DAY, HOUR, MINUTE

   JavaScript months start at 0:
   January = 0
   February = 1
*/

const meetingDate = new Date(
    2026,
    1,
    21,
    0,
    0,
    0
);


function updateTimer() {

    const now = new Date();

    const difference = now - meetingDate;

    if (difference < 0) {
        return;
    }

    const seconds =
        Math.floor(difference / 1000);

    const minutes =
        Math.floor(seconds / 60);

    const hours =
        Math.floor(minutes / 60);

    const days =
        Math.floor(hours / 24);


    document.getElementById("days").textContent =
        String(days).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(hours % 24).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes % 60).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds % 60).padStart(2, "0");
}


updateTimer();

setInterval(updateTimer, 1000);


/* =================================
   LITTLE STAR MOVEMENT
================================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    const stars =
        document.querySelector(".stars");

    stars.style.transform =
        `translate(${x}px, ${y}px)`;
});i