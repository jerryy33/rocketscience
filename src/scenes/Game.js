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
        this.universe;
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
        const atlasTexture = this.textures.get('rocket');
        const frames = atlasTexture.getFrameNames();
        console.log(frames);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.universe = this.add.tileSprite(0, 0, this.canvas.width,
            this.canvas.height, 'universe').setOrigin(0, 0).setScrollFactor(0);
        console.log(this.universe.displayWidth);
        this.rocket = new Rocket(this, 50, 300, 'rocket', frames[0]);
        this.cameras.main.startFollow(this.rocket);

        this.scoreboard = new Scoreboard(this.data, this);

        // TODO Scalemanger should handle scaling in the future

        this.asteroids = new Asteroids(this.physics.world, this);
        this.stars = new Stars(this.physics.world, this);
        this.stars.spawnIn();

        // create colliders
        const rocketAsteroidCollider = new RocketAsteroidsCollider(this,
            this.physics.world, this.rocket, this.asteroids);
        const rocketStarCollider = new RocketStarsCollider(this,
            this.physics.world, this.rocket, this.stars);

        // add colliders to the world
        this.physics.world.colliders.add(rocketAsteroidCollider);
        this.physics.world.colliders.add(rocketStarCollider);
    }

    /**
     * Updates the game
     */
    update() {
        // center the world bounds around the rocket
        Phaser.Geom.Rectangle.CenterOn(this.physics.world.bounds,
            this.rocket.x, this.rocket.y);

        // make asteroids appear again if they go out of bounds
        this.physics.world.wrap(this.asteroids);

        // make background moving reverse to the camera
        this.universe.tilePositionX = - this.cameras.main.x;
        this.universe.tilePositionY = - this.cameras.main.y;

        this.rocket.move();
        this.asteroids.updateOnWorldBounds(this.physics.world.bounds);
    }
}
