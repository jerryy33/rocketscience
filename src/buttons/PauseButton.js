import Button from './Button.js';
import createEnum from './PauseStateEum.js';
/**
 * A simple Pause Button which can pause a scene an resume it when clicked
 * Uses two internal states to handle the pausing resuming of the given scene
 */
export default class PauseButton extends Button {
    static #STATES = createEnum(['PAUSED', 'NOT_PAUSED']);
    #state;
    /**
     * @constructor
     * @param {Phaser.Scene} scene the scene where the scoreboard
     * will be created
     */
    constructor(scene) {
        super(scene.canvas.width- 40, 40,
            'Pause', scene);
        this.#state = PauseButton.#STATES.NOT_PAUSED;
        this.#pauseOrResume();
    }
    /**
     * Changes states of the scene based of the current button state
     * @param {Phaser.Scene} scene the scene where this button is displayed
     */
    #pauseOrResume() {
        this.button.on('pointerdown', () => {
            this.updateText(this.#state);
            if (this.#state === PauseButton.#STATES.PAUSED) {
                this.scene.scene.resume('mainGame');
                this.#state = PauseButton.#STATES.NOT_PAUSED;
            } else {
                this.scene.scene.pause('mainGame');
                this.#state = PauseButton.#STATES.PAUSED;
            }
        });
    }
    /**
     * Updates the text of this button according to the current pause state
     * @override
     * @param {string} state the state of the main scene
     */
    updateText(state) {
        const text = state == PauseButton.#STATES.NOT_PAUSED ? 'Resume':'Pause';
        this.button.setText(text);
    }
}
