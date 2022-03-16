/**
 * The interface that appears when the game is finished
 */
export default class Endscreen {
    /**
    * @constructor
    * @param {Phaser.Scene} scene the scene that ended
    * @param {string} scoreboardText  the text of the latest scoreboard
    */
    constructor(scene, scoreboardText) {
        console.log(scoreboardText);
        const style = {font: '74px Arial', fill: '#00ff00',
            backgroundColor: '#000000'};

        // TODO Scalemanger
        this.text = scene.add.text(200, 200, scoreboardText, style);
        console.log(this.text.getTextMetrics());
        this.resumeButton = scene.add.text(200, 400, 'Resume', style);
        this.resumeButton.setInteractive();
    }

    /**
     * [listenToClick description]
     */
    listenToClick() {
        this.resumeButton.on('pointerdown', () => {
            console.log('pointerdown');
        });
    }
}
