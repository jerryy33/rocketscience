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
     * @param {Function} callback callback function to use for pointerdown event
     */
    constructor(x, y, label, scene, callback = () =>{}) {
        this.button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({backgroundColor: '#111'})
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => callback())
            .on('pointerover', () => this.button.setStyle({fill: '#f39c12'}))
            .on('pointerout', () => this.button.setStyle({fill: '#FFF'}));
        this.scene = scene;
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
