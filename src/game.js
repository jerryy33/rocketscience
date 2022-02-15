import Phaser from 'phaser';

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
    const universe = this.add.image(0, 0, 'universe');
    // TODO Scalemanger should handle this in the future
    universe.setScale(2);

    const asteroids = this.physics.add.group({
        key: 'asteroid',
        bounceY: 0.2,
        quantity: 20,
        collideWorldBounds: true,
    });
    asteroids.children.iterate((child) =>{
        child.setPosition(Phaser.Math.RND.between(0, this.sys.canvas.width),
            Phaser.Math.RND.between(0, this.sys.canvas.height/2));
        child.setScale(0.05);
    });
}

/**
*/
function update()
{
}
