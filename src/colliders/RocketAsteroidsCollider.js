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
     * @param {Rocket} object1 An instance of the {@link Rocket} class
     * @param {Asteroids} object2 An instance of the {@link Asteroids} class
     */
    constructor(scene, world, object1, object2) {
        const collideCallback = function(rocket, asteroid) {
            // reverse velocity of the colliding asteroid
            const currentVelo = asteroid.body.velocity.x;
            asteroid.body.setVelocity(-currentVelo*5);
            rocket.play('noBoost', true);
            // reduce Number of lives
            scene.scoreboard.updateLives(-1);
            const timeConfig = {
                delay: 1000,
                callback: (rocket, asteroid) => {
                    // remove asteroid
                    asteroid.destroy();
                    // slow down the rocket
                    rocket.setVelocity(5, 0);
                },
                args: [rocket, asteroid],
            };
            // add delay before destroying asteroid
            scene.time.addEvent(timeConfig);
        };
        super(world, true, object1, object2, collideCallback);
    }
}
