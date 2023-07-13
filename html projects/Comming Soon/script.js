// Set the launch date and time
const launchDate = new Date('2023-07-07T00:00:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    // Calculate the remaining hours, minutes, and seconds
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);

    // If the countdown reaches zero, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').textContent = 'Website is live!';
    }
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}
