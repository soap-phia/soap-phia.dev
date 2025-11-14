splashes = [
    ['cheeseburger', '#ebaaee'],
    ['beautiful sophie art', '#ebaaee'],
    ['Shut up, Synaptic!', 'yellow'],
    ['chicken access', 'orange'],
    ['That Bender Harkens otherwise', 'orange'],
    ['ampy wampy', 'purple'],
    ['we need to remove antonios', 'red'],
    ['mad cuz bad', '#ebaaee'],
    ['crazy ant [...]', 'cyan'],
    ['how was your little vknap my dear? was it rejuvenating?', 'purple'],
];

document.addEventListener('DOMContentLoaded', function() {
    splash = document.getElementById('splash');
    rand = Math.floor(Math.random() * splashes.length);
    splashData = splashes[rand];
    splash.textContent = splashData[0];
    splash.style.color = splashData[1];
});