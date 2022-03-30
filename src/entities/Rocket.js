import Phaser from 'phaser';
/**
 * A rocket which can fly in space and needs to avoid asteroids.
 * Will be controled by the player
 */
export default class Rocket extends Phaser.Physics.Arcade.Sprite {
    /**
     * @constructor
     * @param {Phaser.Scene} scene the current scene
     * @param {number} x x position in the scene
     * @param {number} y y position in the scene
     * @param {(string|Phaser.Texures.Texture)} texture the sprites texure
     * @param {(string|number)} frame the default frame to use
     */
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // adds a new rocket to the scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        // TODO Scalemanager
        this.setScale(0.1);
        this.angle = 90;
        this.body.allowGravity = false;
    }

    /**
     * Control the velocity based on which control key is down.
     * Down key sets the velocity downwards,
     * the right key rightwards and the up key upwards
     */
    move() {
        if (this.scene.cursors.right.isDown) {
            this.setVelocity(100, 0);
        } else if (this.scene.cursors.down.isDown) {
            this.setVelocity(0, 100);
        } else if (this.scene.cursors.up.isDown) {
            this.setVelocity(0, -100);
        }
    }
}