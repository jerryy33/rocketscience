import Phaser from 'phaser';
import './style.css';

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
            debug: false,
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

let asteroid;
let asteroids;
let game = new Phaser.Game(config);

/**
*/
function preload() {
    this.load.image('universe', 'assets/universe.jpg');
    this.load.image('asteroid', 'assets/asteroid.png');
    this.load.image('bomb', 'assets/bomb.png');
}

/**
*/
function create() {
    this.add.image(500, 1200, 'universe');
    asteroid = this.physics.add.image(100, 100, 'asteroid')
    asteroid.setBounce(0.4);
    asteroid.setCollideWorldBounds(true);
    asteroids = this.physics.add.group();
    asteroids.create('asteroid').setVelocity(100, 0);
}

/**
*/
function update ()
{
}
