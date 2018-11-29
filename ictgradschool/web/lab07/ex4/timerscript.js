
window.addEventListener("DOMContentLoaded",timerStart);
var timer;
function timerStart() {
    timer = setInterval(timerFunction, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    var stopper = document.getElementById("stop");
    stopper.addEventListener("click", function () {
        clearInterval(timer);
        console.log("stopppp");
    });

    var starter = document.getElementById("start");
    starter.addEventListener("click", function () {
        timerStart();
        console.log("starttttt");
    });
});

function timerFunction() {
    var d = new Date();

    document.getElementById("time").innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

