/**
 * [button description]
 * @type {[type]}
 */
export default class Button {
    /**
     * [constructor description]
     * @param {[type]}   x         [description]
     * @param {[type]}   y         [description]
     * @param {[type]}   label     [description]
     * @param {[type]}   scene     [description]
     * @param {Function} callback  [description]
     */
    constructor(x, y, label, scene, callback = () =>{}) {
        this.button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({backgroundColor: '#111'})
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => callback())
            .on('pointerover', () => this.button.setStyle({fill: '#f39c12'}))
            .on('pointerout', () => this.button.setStyle({fill: '#FFF'}));
    }
}
