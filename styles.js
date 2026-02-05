const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
let noScale = 1;
let yesScale = 1;

// --- THE NOTIFICATION FUNCTION ---
function sendNotification() {
    const formspreeUrl = "https://formspree.io/f/xqedzpny"; 

    fetch(formspreeUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            message: "THEY SAID YES! ❤️",
            date: new Date().toLocaleString()
        })
    }).then(() => console.log("Notification sent!"));
}

// --- WHEN YES IS CLICKED ---
yesBtn.addEventListener('click', () => {
    sendNotification();
    
    // Create a confetti effect
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }

    document.querySelector('.container').innerHTML = `
        <h1 style="font-size: 3rem;">YAY! 🥰</h1>
        <p style="font-size: 1.5rem;">The notification has been sent.<br>I'll see you soon!</p>
    `;
});

// --- WHEN NO IS HOVERED ---
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute'; // Ensures it can move anywhere
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noScale -= 0.1;
    noBtn.style.transform = `scale(${noScale})`;

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (noScale <= 0.3) {
        noBtn.style.display = 'none';
    }
});

// --- ANTI-DELETE/CLOSE LOGIC ---
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = ''; 
});

// --- OPTIONAL CONFETTI EFFECT ---
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.innerText = "❤️";
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
    confetti.style.zIndex = '999';
    confetti.style.transition = 'transform 3s linear, opacity 3s';
    
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = '0';
    }, 100);

    setTimeout(() => confetti.remove(), 3000);
}
// --- PREVENT CLOSING THE TAB ---
window.addEventListener('beforeunload', (event) => {
    // Note: Modern browsers don't allow custom text anymore for security, 
    // but this WILL trigger the browser's standard "Are you sure you want to leave?" pop-up.
    event.preventDefault();
    event.returnValue = ''; 
});
