import Phaser from 'phaser';
import Button from '../buttons/Button.js';
/**
 * The interface that appears when a game is finished
 */
export default class Endscreen extends Phaser.Scene {
    #centerX;
    #centerY;
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
        this.canvas = this.sys.game.canvas;
        this.#centerX = this.canvas.width/2;
        this.#centerY = this.canvas.height/2 -85;
        console.log(this.#centerX, this.#centerY);
        scoreboardText = [
            'Level: ' + 0,
            'Lives: ' + 0,
            'Score: ' + 0,
        ];
        const style = {fontFamily: 'Arial', fontSize: '50px',
            fontStyle: 'italic', color: '#00ff00', backgroundColor: '#000000',
            align: 'center'};
        const buttonConfig = {
            onPointerOverStyle: {fill: '#f39c12'},
            onPointerOutStyle: {fill: '#00ff00'},
            style: style,
            shadow: [1, 2, '#ffff'],
        };
        // TODO Scalemanger
        this.stats = this.add.text(this.#centerX, this.#centerY, scoreboardText,
            style).setOrigin(0.5);
        this.newTryButton = new Button(this.#centerX, this.#centerY + 200,
            'Retry', this, buttonConfig, this.restartMainGame);
        const [x, y] = [this.stats.getTopLeft().x,
            this.stats.getBottomRight().y];
        const rec = this.add.rectangle(x+ 100, y, 400, 350).setOrigin(0.5);
        rec.setStrokeStyle(4, 0x0ff00);
    }
    /**
     * When the Restart Button is clicked a new game will be started.
     * Currently the scores as completly reset to normal
     */
    restartMainGame() {
        console.log('pointerdown');
        this.scene.start('mainGame');
        this.scene.start('pauseMenu');
    }
}
