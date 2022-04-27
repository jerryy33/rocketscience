import Phaser from 'phaser';
import Endscreen from './scenes/Endscreen.js';
import Game from './scenes/Game.js';
import PauseMenu from './scenes/PauseMenu.js';

const mainGame = new Game();
const endScreen = new Endscreen();
const pauseMenu = new PauseMenu();

const width = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight||
document.body.clientHeight;

console.log(width, height);
const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.NONE,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        width: width,
        height: height,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: true,
        },
    },
};
const game = new Phaser.Game(config);

game.scene.add('mainGame', mainGame);
game.scene.add('endScreen', endScreen);
game.scene.add('pauseMenu', pauseMenu);

game.scene.start('mainGame').start('pauseMenu');
// game.scene.start('endScreen');
