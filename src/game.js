import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    scale: {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let asteroid;
let asteroids;
let game = new Phaser.Game(config);

function preload() {
    this.load.image('universe', 'assets/universe.jpg');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('asteroid', 'assets/asteroidv2.jpg');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
  this.add.image(400, 300, 'universe');

  asteroid = this.physics.add.image(100,100,'asteroid')
  asteroid.setBounce(0.4);
  asteroid.setCollideWorldBounds(true);
  asteroids = this.physics.add.group();
  asteroids.create('asteroidv2').setVelocity(100,0)


}

function update ()
{
}
