let musicPlaying = false;
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
const volumeSlider = document.getElementById('volume-slider');
const landingPage = document.getElementById('landing-page');
const bioContainer = document.getElementById('bio-container');

music.volume = 0.1;

function changeVolume() {
    const volume = volumeSlider.value / 100;
    music.volume = volume;
}

function showBio() {
    landingPage.style.opacity = '0';
    landingPage.style.transform = 'scale(0.8)';

    setTimeout(() => {
        landingPage.style.display = 'none';
        bioContainer.style.display = 'block';

        // Mostrar la bio con fade in
        setTimeout(() => {
            bioContainer.style.opacity = '1';
            bioContainer.style.transform = 'scale(1)';
        }, 50);
    }, 300);
}

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicIcon.className = 'fa-solid fa-volume-mute';
        musicPlaying = false;
    } else {
        music.play();
        musicIcon.className = 'fa-solid fa-volume-high';
        musicPlaying = true;
    }
}

document.addEventListener('click', function() {
    if (!musicPlaying) {
        music.play().then(() => {
            musicPlaying = true;
            musicIcon.className = 'fa-solid fa-volume-high';
        }).catch(() => {
            musicIcon.className = 'fa-solid fa-volume-mute';
        });
    }
}, { once: true });

let text = "XanaxSSJ";
let index = 0;
let direction = 1;

function animateTitle() {
    document.title = text.slice(0, index);

    if (direction === 1) {
        index++;
        if (index > text.length) {
            direction = -1;
            index = text.length;
        }
    } else {
        index--;
        if (index < 1) { 
            direction = 1;
            index = 0;
        }
    }

    setTimeout(animateTitle, 350);
}

animateTitle();