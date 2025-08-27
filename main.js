import Game from './src/core/Game.js';

const iframe = document.getElementById('website-frame');

iframe.addEventListener('load', () => {
    const game = new Game(iframe.contentWindow, iframe.contentDocument);
    game.start();
});