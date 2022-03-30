import Phaser from 'phaser';
/**
 * Custom collider class for interaction between {@link Rocket}
 * and {@link Asteroids}.
 */
export default class RocketAsteroidsCollider
    extends Phaser.Physics.Arcade.Collider {
    /**
     * @constructor
     * @param {Phaser.Scene} scene the scene where the collider is based
     * @param {Phaser.Physics.Arcade.World} world a given physics world
     * @param {boolean} overlapOnly wheter to check for collision or overlap
     * @param {Rocket} object1 An instance of the {@link Rocket} class
     * @param {Asteroids} object2 An instance of the {@link Asteroids} class
     */
    constructor(scene, world, overlapOnly, object1, object2) {
        const destroyAsteroid = function(rocket, asteroid) {
            // remove asteroid
            asteroid.destroy();

            rocket.setVelocity(5, 0);
            console.log('collision');
        };
        const collideCallback = function(rocket, asteroid) {
            // TODO play animations
            // reduce Number of lives
            scene.scoreboard.updateLives(-1);

            // reverse velocity of the colliding asteroid
            const currentVelo = asteroid.body.velocity.x;
            asteroid.body.setVelocity(-currentVelo*5);
            console.log(scene.time.now);
            const timeConfig = {
                delay: 1000,
                callback: destroyAsteroid,
                args: [rocket, asteroid],
            };
            scene.time.addEvent(timeConfig);
        };
        super(world, overlapOnly, object1, object2, collideCallback);
    }
}
