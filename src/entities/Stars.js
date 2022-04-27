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
        this.canvas = scene.canvas;
    }
    /**
     *
     */
    spawnIn() {
        console.log(this.canvas.height);
        this.children.iterate((child) =>{
            // make start values responsive TODO
            child.setRandomPosition(-300, 30, this.canvas.width-50,
                this.canvas.height-50);
            child.setScale(1.2);
        });
    }
}
