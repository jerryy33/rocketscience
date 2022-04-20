import ButtonConfig from './ButtonConfig.js';
/**
 * TODO vielleicht zu interface oder abstract class ändern
 * A base class for buttons used inside the game
 */
export default class Button {
    /**
     * @constructor
     * @param {number}   x the x position where the button is placed
     * @param {number}   y the y position where the button is placed
     * @param {string}   label the text which is used as a label for the button
     * @param {Phaser.Scene} scene the scene where the button will appear
     * @param {Object} config config object @see ButtonConfig.js
     * @param {Function} callback callback function to use for pointerdown event
     * the passed scene will be used as this context
     */
    constructor(x, y, label, scene, config = ButtonConfig.DEFAULT_CONFIG,
        callback = () =>{}) {
        const buttonConfig = ButtonConfig.useDefaultsIfNotPresent(config);
        this.scene = scene;
        this.button = this.scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setShadow(...buttonConfig.shadow)
            .setStyle(buttonConfig.style)
            .setInteractive(buttonConfig.interactive)
            .on('pointerdown', () => callback.call(scene))
            .on('pointerover',
                () => this.button.setStyle(buttonConfig.onPointerOverStyle))
            .on('pointerout',
                () => this.button.setStyle(buttonConfig.onPointerOutStyle));
    }
    /**
     * Updates the text of a button with the given string
     * @param  {string} text the new string to use as a text
     * @return {Phaser.GameObjects.Text}  This text object
     */
    updateText(text) {
        this.button.setText(text);
        return this.button;
    }
}
