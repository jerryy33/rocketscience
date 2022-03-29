import Phaser from 'phaser';
import Asteroids from './Asteroids.js';
import Rocket from './Rocket.js';
import RocketAsteroidsCollider from './RocketAsteroidsCollider.js';
import Scoreboard from './Scoreboard.js';

/**
 * Our game class
 * @extends Phaser.Scene
 */
export default class Game extends Phaser.Scene {
    /**
     * @constructor
     */
    constructor() {
        super({key: 'mainGame'});
        this.asteroids;
        this.rocket;
        this.cursors;
        this.scoreboard;
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
        this.scoreboard = new Scoreboard(this.data, this);

        // TODO Scalemanger should handle this in the future
        universe.scaleX = window.innerWidth;
        universe.scaleY = window.innerHeight;

        this.asteroids = new Asteroids(this.physics.world, this);
        this.asteroids.setChildrenPositions();

        const atlasTexture = this.textures.get('rockets');
        const frames = atlasTexture.getFrameNames();
        console.log(frames);
        this.rocket = new Rocket(this, 50, 300, 'rockets', frames[1]);
        const rocketAsteroidCollider = new RocketAsteroidsCollider(this,
            this.physics.world, false, this.rocket, this.asteroids);
        this.physics.world.colliders.add(rocketAsteroidCollider);
    }

    /**
     * Updates the game
     */
    update() {
        this.physics.world.wrap(this.asteroids);
        this.physics.world.wrap(this.rocket);
        this.rocket.move();
    }
}
