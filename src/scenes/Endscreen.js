import Phaser from 'phaser';
/**
 * The interface that appears when a game is finished
 */
export default class Endscreen extends Phaser.Scene {
    /**
    * @constructor
    * @param {Phaser.Scene} scene the scene that ended
    * @param {string} scoreboardText  the text of the latest scoreboard
    */
    constructor() {
        super({key: 'endScreen'});
        this.scoreboardText;
        this.newTryButton;
    }
    /**
     * Create the environment for the endscreen of the game
     * @param  {string} scoreboardText the latest scoreborad text
     */
    create(scoreboardText) {
        console.log(scoreboardText);
        const style = {font: '74px Arial', fill: '#00ff00',
            backgroundColor: '#000000'};
        // TODO Scalemanger
        this.text = this.add.text(200, 100, scoreboardText, style);
        console.log(this.text.getTextMetrics());
        this.newTryButton = this.add.text(200, 400, 'Resume', style);
        this.newTryButton.setInteractive({useHandCursor: true});

        this.restartMainGame();
    }
    /**
     * When the Restart Button is clicked a new game will be started.
     * Currently the scores as completly reset to normal
     */
    restartMainGame() {
        this.newTryButton.on('pointerdown', () => {
            console.log('pointerdown');
            this.scene.start('mainGame');
        });
    }
}
