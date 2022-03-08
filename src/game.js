import Phaser from 'phaser';
import Asteroids from './Asteroids.js';

/**
 */
class Game extends Phaser.Scene {
    /**
     * @constructor
    */
    constructor() {
        super();
        this.asteroids;
    }

    /**
     * Preloads all assets for the game
     */
    preload() {
        this.load.image('universe', 'assets/universe.jpg');
        this.load.image('asteroid', 'assets/asteroid.png');
        this.load.image('star', 'assets/star.png');
    }

    /**
     * Creates the environment for our game including all objects
     */
    create() {
        const universe = this.add.image(0, 0, 'universe');
        // TODO Scalemanger should handle this in the future
        universe.setScale(2);
        this.asteroids = new Asteroids(this.physics.world, this);
        this.asteroids.setChildrenPositions();
    }

    /**
     * Updates the game
     */
    update() {
        this.physics.world.wrap(this.asteroids);
    }
}
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
    scene: Game,
};
const game = new Phaser.Game(config);
