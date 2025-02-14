
function showConfirmation() {
    document.querySelector('.confirmation').style.display = 'block';
}

function openLetter() {
    document.querySelector('.letter').style.display = 'block';
    document.querySelector('.envelope').style.display = 'none';
    document.querySelector('.confirmation').style.display = 'none';
}

function rickroll() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
function generateHearts() {
    const emojis = ['💌', '🥰', '😁', '💕', '❤️', '❤️‍🔥', '🎉', '🎁'];

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            document.body.appendChild(heart);

            const x = Math.random() * window.innerWidth;
            const y = window.innerHeight - 50;
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 200);
    }
}
