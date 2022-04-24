/**
 * A class that applies default config values to the styling of buttons.
 */
export default class ButtonConfig {
    static DEFAULT_CONFIG = {
        onPointerOverStyle: {},
        onPointerOutStyle: {},
        interactive: {useHandCursor: true},
        shadow: [],
        style: {}};
    // handler function to set defaults when no values available
    static #handler = {
        get: function(target, name) {
            const value = ButtonConfig.DEFAULT_CONFIG[name];
            return name in target && name in ButtonConfig.DEFAULT_CONFIG ?
                target[name] : value;
        },
    };
    /**
     * Uses a proxy to set default values and make invalid properties undefined
     * @param {Object} config the config to proxy
     * @return {Proxy} a proxy object with default config values
     */
    static useDefaultsIfNotPresent(config) {
        return new Proxy(config, this.#handler);
    }
}
