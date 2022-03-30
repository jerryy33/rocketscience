import Phaser from 'phaser';
/**
 * Custom collider class for interaction between {@link Rocket}
 * and {@link Stars}.
 */
export default class RocketStarsCollider
    extends Phaser.Physics.Arcade.Collider {
    /**
     * @constructor
     * @param {Phaser.Scene} scene the scene where the collider is based
     * @param {Phaser.Physics.Arcade.World} world a given physics world
     * @param {boolean} overlapOnly wheter to check for collision or overlap
     * @param {Rocket} object1 An instance of the {@link Rocket} class
     * @param {Stars} object2 An instance of the {@link Stars} class
     */
    constructor(scene, world, overlapOnly, object1, object2) {
        const collideCallback = function(rocket, star) {
            scene.scoreboard.updateScore();
            star.destroy();
            rocket.setVelocity(100, 0);
            console.log('collision with star');
        };
        super(world, overlapOnly, object1, object2, collideCallback);
    }
}