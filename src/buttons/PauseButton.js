import Button from './Button.js';
import createEnum from './PauseStateEum.js';
/**
 *
 */
export default class PauseButton extends Button {
    #states;
    #state;
    /**
     * @constructor
     * @param {Phaser.Scene} scene the scene where the scoreboard
     * will be created
     */
    constructor(scene) {
        super(scene.canvas.width- 40, 40,
            'Pause', scene);
        this.#states = createEnum(['PAUSED', 'NOT_PAUSED']);
        this.#state = this.#states.NOT_PAUSED;
        console.log(this.#state);
        this.#pauseOrRemove(scene);
    }
    /**
     * Changes states of the scene based of the current button state
     * @param {Phaser.Scene} scene the scene where this button is displayed
     */
    #pauseOrRemove(scene) {
        this.button.on('pointerdown', () => {
            if (this.#state ===this.#states.PAUSED) {
                console.log('start');
                scene.scene.start();
                this.#state = this.#states.NOT_PAUSED;
            } else {
                scene.scene.pause();
                console.log('paused');
                this.#state = this.#states.PAUSED;
            }
        });
    }
}
