/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
import particlesJS from 'particles.js';
import './style.css';

window.particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
});
