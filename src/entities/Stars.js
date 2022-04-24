import Phaser from 'phaser';
/**
 * This group is representing the star items twhich to the rocket can collect
 * and increase its current score
 */
export default class Stars extends Phaser.Physics.Arcade.Group {
    /**
     * @constructor
     * @param {Phaser.Physics.Arcade.World} world the current world environment
     * @param {Phaser.Scene} scene the current scene
     */
    constructor(world, scene) {
        const config = {
            key: 'star',
            allowGravity: false,
            quantity: 10,
            immovable: true,
            collideWorldBounds: false,
        };
        super(world, scene, config);
        this.#setPositions();
    }
    /**
     *
     */
    #setPositions() {
        this.children.iterate((child) =>{
            child.setPosition(Phaser.Math.RND.between(
                this.scene.sys.canvas.width/3, this.scene.sys.canvas.width),
            Phaser.Math.RND.between(0, this.scene.sys.canvas.height));
            child.setScale(1.2);
        });
    }
}
