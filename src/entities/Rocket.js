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
        this.#initAnimations();
        // TODO Scalemanager
        this.setScale(0.1);
        this.body.allowGravity = false;
    }
    /**
     * Creates animations for this class specifically
     */
    #initAnimations() {
        this.scene.anims.create({
            key: 'boost',
            frameRate: 10,
            frames: this.scene.anims.generateFrameNames('rocket', {
                prefix: 'rocket',
                suffix: '.png',
                start: 2,
                end: 2,
                zeroPad: 2,
            }),
            repeat: 1,
        });
        this.scene.anims.create({
            key: 'noBoost',
            frameRate: 10,
            frames: this.scene.anims.generateFrameNames('rocket', {
                prefix: 'rocket',
                suffix: '.png',
                start: 2,
                end: 1,
                zeroPad: 2,
            }),
            repeat: 0,
        });
    }
    /**
     * Control the velocity based on which control key is down.
     * Down key sets the velocity downwards,
     * the right key rightwards, the left key leftwards and the up key upwards.
     * Also plays Animations for this class and sets the direction
     * the rocket is facing
     */
    move() {
        // TODO remove code duplication and set hitbox(see todo.md)
        if (this.scene.cursors.right.isDown) {
            this.angle = 0;
            this.play('boost', true);
            this.setVelocity(100, 0);
        } else if (this.scene.cursors.down.isDown) {
            this.angle = 90;
            this.play('boost', true);
            this.setVelocity(0, 100);
        } else if (this.scene.cursors.up.isDown) {
            this.angle = -90;
            this.play('boost', true);
            this.setVelocity(0, -100);
        } else if (this.scene.cursors.left.isDown) {
            this.play('boost', true);
            this.angle = -180;
            this.setVelocity(-100, 0);
        }
    }
}
