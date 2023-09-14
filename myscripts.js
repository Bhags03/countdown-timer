
const countDownDate = new Date("2023-12-31T23:59:59").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    
    const distance = countDownDate - now;
    
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (distance < 0) {
        clearInterval(x);
        countdownElement.textContent = "EXPIRED";
    }
}, 1000);