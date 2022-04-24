import Phaser from 'phaser';
import PauseButton from '../buttons/PauseButton.js';
/**
 * A menu which appears when the current game is paused
 * Also displays the pause button on top of the current game
 */
export default class PauseMenu extends Phaser.Scene {
    /**
    * @constructor
    */
    constructor() {
        super({key: 'pauseMenu'});
        this.pauseButton;
        this.canvas;
    }

    /**
     * Creates the UI interface when a game is paused
     */
    create() {
        this.canvas = this.sys.game.canvas;
        this.pauseButton = new PauseButton(this);
    }
}
