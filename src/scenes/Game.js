import Phaser from 'phaser';
import Asteroids from '../entities/Asteroids.js';
import Stars from '../entities/Stars.js';
import Rocket from '../entities/Rocket.js';
import RocketAsteroidsCollider from '../colliders/RocketAsteroidsCollider.js';
import RocketStarsCollider from '../colliders/RocketStarsCollider.js';
import Scoreboard from '../entities/Scoreboard.js';


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
        this.canvas;
        this.asteroids;
        this.stars;
        this.rocket;
        this.cursors;
        this.scoreboard;
    }

    /**
     * Preloads all assets for the game
     */
    preload() {
        this.load.image('universe', 'assets/universe.png');
        this.load.image('asteroid', 'assets/asteroid.png');
        this.load.image('star', 'assets/star.png');
        this.load.atlas('rocket', 'assets/Rocket_Sprite.png',
            'assets/Rocket_Sprite.json');
    }

    /**
     * Creates the environment for our game including all objects
     */
    create() {
        this.canvas = this.sys.game.canvas;

        this.cursors = this.input.keyboard.createCursorKeys();

        const universe = this.add.image(0, 0, 'universe').setOrigin(0, 0);
        this.scoreboard = new Scoreboard(this.data, this);

        // TODO Scalemanger should handle scaling in the future

        this.asteroids = new Asteroids(this.physics.world, this);
        this.stars = new Stars(this.physics.world, this);

        const atlasTexture = this.textures.get('rocket');
        const frames = atlasTexture.getFrameNames();
        console.log(frames);
        this.rocket = new Rocket(this, 50, 300, 'rocket', frames[0]);
        // create colliders
        const rocketAsteroidCollider = new RocketAsteroidsCollider(this,
            this.physics.world, false, this.rocket, this.asteroids);
        const rocketStarCollider = new RocketStarsCollider(this,
            this.physics.world, false, this.rocket, this.stars);

        // add colliders to the world
        this.physics.world.colliders.add(rocketAsteroidCollider);
        this.physics.world.colliders.add(rocketStarCollider);
    }

    /**
     * Updates the game
     */
    update() {
        this.physics.world.wrap(this.asteroids);
        this.physics.world.wrap(this.rocket);
        this.rocket.move();

        this.asteroids.updateOnWorldBounds(this.physics.world.bounds);
    }
}
