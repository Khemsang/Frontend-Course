let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let time;

// implementations the start function

document.getElementById("startTimer").addEventListener("click", () => { time = setInterval(displayTimer, 10); })// start the timer});

// complexity is 9 it's time to do something


function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    let h = (hours < 10) ? "0" + hours : hours;
    let m = (minutes < 10) ? "0" + minutes : minutes;
    let s = (seconds < 10) ? "0" + seconds : seconds;
    let ms = (milliseconds < 10) ? "0" + milliseconds : milliseconds;



    //console.log(`${h}:${m}:${s}:${ms}`);  
    timerRef.textContent = `${h}:${m}:${s}:${ms}`;

}
// implementations the pause 

document.getElementById("pauseTimer").addEventListener("click", () => {
     clearInterval(time); })// pause the timer});


// implementations the reset function

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(time);
    milliseconds = 0;
         seconds = 0;
         minutes = 0;
          hours = 0;
    timerRef.textContent = "00:00:00:000";
})// reset the timer});
// implementations the stop function        
