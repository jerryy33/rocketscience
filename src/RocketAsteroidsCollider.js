import Phaser from 'phaser';
/**
 * Custom collider class for interaction between {@link Rocket}
 * and {@link Asteroids}.
 */
export default class RocketAsteroidsCollider
    extends Phaser.Physics.Arcade.Collider {
    /**
     * @constructor
     * @param {Phase.Physics.Arcade.World} world a given physics world
     * @param {boolean} overlapOnly wheter to check for collision or overlap
     * @param {Rocket} object1 An instance of the {@link Rocket} class
     * @param {Asteroids} object2 An instance of the {@link Asteroids} class
     */
    constructor(world, overlapOnly, object1, object2) {
        const collideCallback = function(rocket, asteroid) {
            // play animations
            // reduce Number of lives

            asteroid.body.setVelocity(- asteroid.body.velocity);

            // const timeConfig = {
            //     delay: 1000,
            // };
            // scene.time.addEvent(timeConfig);

            // remove asteroid
            // asteroid.destroy();

            rocket.setVelocity(5, 0);
            console.log('collision');
        };
        super(world, overlapOnly, object1, object2, collideCallback);
    }
}
