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
        data.set('level', 5);
        data.set('score', 2000);

        this.scoreboardText = [
            'Level: ' + data.get('level'),
            'Lives: ' + data.get('lives'),
            'Score: ' + data.get('score'),
        ];

        this.text = scene.add.text(10, 10, '',
            {font: 'Arial', fill: '#00ff00'});
        this.text.setText(this.scoreboardText);

        this.data = data;
        this.scene = scene;
    }

    /**
     * Updates the number of lives the player has currently
     * @param  {number} amount the number added or subtracted
     * of the current number of lives
     */
    updateLives(amount) {
        this.scene.data.values.lives += amount;
        this.text.setText(this.updateScoreboardText());
    }

    /**
     * Updates the scoreboard with the current data and returns it
     * @return {Phaser.GameObjects.Text} the updated scoreboard text
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
