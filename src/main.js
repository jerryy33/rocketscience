import Phaser from 'phaser';
import Endscreen from './scenes/Endscreen.js';
import Game from './scenes/Game.js';

const mainGame = new Game();
const endScreen = new Endscreen();

const config = {
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
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

game.scene.start('mainGame');
