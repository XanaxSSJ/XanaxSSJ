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
        if (index < 0) {
            direction = 1;
            index = 0;
        }
    }

    setTimeout(animateTitle, 350);
}

fetch('https://api.countapi.xyz/hit/xanaxssj.github.io/XanaxSSJ')
    .then(res => res.json())
    .then(data => {
        document.getElementById('visitas').textContent = data.value;
    });
