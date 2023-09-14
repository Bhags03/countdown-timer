// Set the date we're counting down to (change this date to your desired end date and time)
const countDownDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = countDownDate - now;
    
    // Calculate hours, minutes, and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown timer
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        countdownElement.textContent = "EXPIRED";
    }
}, 1000);