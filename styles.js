const yesBtn = document.getElementById('yesBtn');
let yesScale = 1;

// Inside the noBtn listener:
yesScale += 0.1; 
yesBtn.style.transform = `scale(${yesScale})`;
const noBtn = document.getElementById('noBtn');
let noScale = 1; // 1 is the starting size (100%)

noBtn.addEventListener('mouseover', () => {
    // 1. Move the button (The "Run Away" logic)
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Shrink the button
    noScale -= 0.1; // Decrease size by 10% each time
    noBtn.style.transform = `scale(${noScale})`;

    // 3. If it gets too small, just hide it!
    if (noScale <= 0.2) {
        noBtn.style.display = 'none';
    }
});