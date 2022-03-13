import Phaser from 'phaser';
import Asteroids from './Asteroids.js';
import Rocket from './Rocket.js';

/**
 */
class Game extends Phaser.Scene {
    /**
     * @constructor
    */
    constructor() {
        super();
        this.asteroids;
        this.rocket;
        this.cursors;
    }

    /**
     * Preloads all assets for the game
     */
    preload() {
        this.load.image('universe', 'assets/universe.jpg');
        this.load.image('asteroid', 'assets/asteroid.png');
        this.load.image('star', 'assets/star.png');
        this.load.atlas('rockets', 'assets/rocket.png', 'assets/rocket.json');
    }

    /**
     * Creates the environment for our game including all objects
     */
    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        const universe = this.add.image(0, 0, 'universe');
        // TODO Scalemanger should handle this in the future
        universe.setScale(2);
        this.asteroids = new Asteroids(this.physics.world, this);
        this.asteroids.setChildrenPositions();

        const atlasTexture = this.textures.get('rockets');
        const frames = atlasTexture.getFrameNames();
        console.log(frames);
        this.rocket = new Rocket(this, 50, 300, 'rockets', frames[1]);
    }

    /**
     * Updates the game
     */
    update() {
        this.physics.world.wrap(this.asteroids);
        this.rocket.move();
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
