function nextpage()
{
  window.location.replace('pomodoro2.html');
}
let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    alert("YOUR TIME STARTS NOW");
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    alert("Are You Sure !!! Timer will Strat Again");
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

// Initialize the display
updateDisplay();
