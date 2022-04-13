/**
 * A basic scoreboard displaying the current amount of lives,
 * the score and the current level number
 */
export default class Scoreboard {
    /**
     * @constructor
     * @param {Phaser.Data.DataManager} data the data manager for the scene
     * @param {Phaser.Scene} scene the scene where the scoreboard
     * will be created
     */
    constructor(data, scene) {
        data.set('lives', 3);
        data.set('level', 0);
        data.set('score', 0);

        this.scoreboardText = [
            'Level: ' + data.get('level'),
            'Lives: ' + data.get('lives'),
            'Score: ' + data.get('score'),
        ];

        // TODO Scalemanger
        this.text = scene.add.text(10, 10, '',
            {font: 'Arial', fill: '#00ff00'});
        this.text.setText(this.scoreboardText);

        this.data = data;
        this.scene = scene;
    }

    /**
     * Updates the number of lives the player has currently
     * @param {number} amount the number added or subtracted
     * of the current number of lives
     */
    updateLives(amount) {
        this.data.values.lives += amount;
        if (this.data.values.lives <= 0) {
            this.scene.scene.stop('mainGame');
            this.scene.scene.stop('pauseMenu');
            this.scene.scene.start('endScreen', this.updateScoreboardText());
        }
        this.text.setText(this.updateScoreboardText());
    }
    /**
     * Updates the score when a star is collected by a rocket
     */
    updateScore() {
        this.data.values.score += 10;
        this.text.setText(this.updateScoreboardText());
    }

    /**
     * Updates the scoreboard with the current data and returns it
     * @return {string} the updated scoreboard text
     */
    updateScoreboardText() {
        this.scoreboardText = [
            'Level: ' + this.data.get('level'),
            'Lives: ' + this.data.get('lives'),
            'Score: ' + this.data.get('score'),
        ];
        return this.scoreboardText;
    }
}
