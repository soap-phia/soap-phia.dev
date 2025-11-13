splashes = [
    ['cheeseburger', '#ebaaee'],
    ['Shut up, Synaptic!', 'yellow'],
];

document.addEventListener('DOMContentLoaded', function() {
    splash = document.getElementById('splash');
    rand = Math.floor(Math.random() * splashes.length);
    splashData = splashes[rand];
    splash.textContent = splashData[0];
    splash.style.color = splashData[1];
});