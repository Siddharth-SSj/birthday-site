function enterSite() {
    // 1. Hide the overlay
    document.getElementById('overlay').style.display = 'none';
    
    // 2. Show the content
    document.getElementById('main-content').style.display = 'block';
    
    // 3. Play Music
    const audio = document.getElementById('bg-music');
    audio.volume = 0.15; // Set volume to 50%
    audio.play().catch(error => {
        console.log("Autoplay blocked. User must interact first.");
    });

    // 4. Trigger Confetti
    launchConfetti();
}

function launchConfetti() {
    var duration = 3000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#d63384', '#ffffff', '#ffbd59']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#d63384', '#ffffff', '#ffbd59']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}