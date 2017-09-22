var interval;

function setTime() {
    var duration = document.getElementById("duration");
    console.log(duration.value);
    startTimer(duration.value);
}

function startTimer(duration) {
    var duration = 60 * duration;
    
    var display = document.getElementById('div');
    var timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

function stop() {
    clearInterval(interval);        
}

function reset() {
    var display = document.getElementById('div');
    var duration = document.getElementById("duration");
    display.textContent = duration.value + ":00";
    clearInterval(interval);
}