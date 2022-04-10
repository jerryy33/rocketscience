import Phaser from 'phaser';
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
            quantity: 15,
            collideWorldBounds: false,
            runChildUpdate: true,
        };
        super(world, scene, config);
        this.#setChildrenPositions();
    }
    /**
     * Sets the position for each child of the asteroid fied and scales them
     */
    #setChildrenPositions() {
        this.children.iterate((child) =>{
            child.setPosition(Phaser.Math.RND.between(
                this.scene.sys.canvas.width/3, this.scene.sys.canvas.width),
            Phaser.Math.RND.between(0, this.scene.sys.canvas.height));
            child.setScale(0.05);
        });
    }
    /**
     * Randomly sets a new y position for an asteroid that just spawned in.
     * @todo Since we have the world bound collision disabled,
     * this is a workaround because the specific event listener for
     * the world boud collision will not fire.
     * Also the scene.wrap method does not provide an option to randomly
     * generate the y position of our asteroid.
     * //TODO improve this idea
     * @param  {Phaser.Geom.Rectangle} worldBounds the world bounds of a scene
     */
    updateOnWorldBounds(worldBounds) {
        this.children.iterate((child) =>{
            if (this.#roughlyEquals(worldBounds.right, child.x)) {
                child.y = Phaser.Math.RND.between(0,
                    this.scene.sys.canvas.height);
            }
        });
    }
    /**
     * Compares if two numbers roughly equals each other, returns true if their
     * difference is smaller than 2.
     * @param {number} x1 first number to compare
     * @param {number} x2 second number to compare
     * @return {boolean} if the numbers are roughly equal to each other
     */
    #roughlyEquals(x1, x2) {
        const diff = Math.abs(x1 -x2);
        if (diff >2) {
            return false;
        }
        return true;
    }
}
