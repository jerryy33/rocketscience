/**
 * [text description]
 * @type {[type]}
 */
export default class Scoreboard {
    /**
     * @constructor
     * @param {[type]} data   [description]
     * @param {[type]} scene  [description]
     */
    constructor(data, scene) {
        data.set('lives', 3);
        data.set('level', 5);
        data.set('score', 2000);

        const text = scene.add.text(100, 100, 'HI',
            {font: 'Arial', fill: '#00ff00'});
        text.setText([
            'Level: ' + data.get('level'),
            'Lives: ' + data.get('lives'),
            'Score: ' + data.get('score'),
        ]);
        console.log(data.get('level'));
        this.data = data;
        this.scene = scene;
    }
    /**
     * [updateLives description]
     * @param  {number} amount               [description]
     */
    updateLives(amount) {
        console.log(this.scene.data.values.lives);
        this.scene.data.values.lives += amount;
        console.log(this.scene.data.values.lives);
        this.scene.text.updateText();
    }
}
