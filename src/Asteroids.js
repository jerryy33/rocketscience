/**
 * Represents a field of asteroids as an dynamic physics group
 */
export default class Asteroids extends Phaser.Physics.Arcade.Group {
    /**
     * @constructor
     * @param {Phaser.Physics.Arcade.World} world the current world environment
     * @param {Phaser.Scene} scene the current scene
     */
    constructor(world, scene) {
        const config = {
            key: 'asteroid',
            allowGravity: false,
            velocityX: -70,
            angularAcceleration: 10,
            quantity: 10,
            collideWorldBounds: false,
        };
        super(world, scene, config);
    }

    /**
     * Sets the position for each child of the asteroid fied and scales them
     */
    setChildrenPositions() {
        this.children.iterate((child) =>{
            child.setPosition(Phaser.Math.RND.between(
                this.scene.sys.canvas.width/3, this.scene.sys.canvas.width),
            Phaser.Math.RND.between(0, this.scene.sys.canvas.height));
            child.setScale(0.05);
        });
    }
}
