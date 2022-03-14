import Phaser from 'phaser';

/**
 *
 */
export default class RocketAsteroidsCollider
    extends Phaser.Physics.Arcade.Collider {
    /**
     * @constructor
     * @param {Phase.Physics.Arcade.World} world            [description]
     * @param {boolean} overlapOnly      [description]
     * @param {Rocket} object1          [description]
     * @param {Asteroids} object2          [description]
     * @param {ArcadePhysicsCallback} collideCallback  [description]
     * @param {ArcadePhysicsCallback} processCallback  [description]
     * @param {*} callbackContext  [description]
     */
    constructor(world, overlapOnly, object1, object2) {
        const collideCallback = function() {
            // console.log('collision');
        };
        super(world, overlapOnly, object1, object2, collideCallback);
    }
}
