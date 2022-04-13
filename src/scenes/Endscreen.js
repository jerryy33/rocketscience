import Phaser from 'phaser';
/**
 * The interface that appears when a game is finished
 */
export default class Endscreen extends Phaser.Scene {
    /**
    * @constructor
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
        // scoreboardText = [
        //     'Level: ' + 0,
        //     'Lives: ' + 0,
        //     'Score: ' + 0,
        // ];
        const style = {fontFamily: 'Arial', fontSize: '50px',
            fontStyle: 'italic', color: '#00ff00', backgroundColor: '#000000',
            align: 'center'};
        // TODO Scalemanger
        console.log(scoreboardText);
        this.stats = this.add.text(200, 100, scoreboardText, style);
        this.newTryButton = this.add.text(200, 400, 'Retry', style);
        this.newTryButton.setInteractive({useHandCursor: true});
        const [x, y] = [this.stats.getTopLeft().x,
            this.stats.getBottomRight().y];
        const rec = this.add.rectangle(x+ 100, y, 400, 400);
        rec.setStrokeStyle(4, 0x0ff00);
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
            this.scene.start('pauseMenu');
        });
    }
}
