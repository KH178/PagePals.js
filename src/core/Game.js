
import * as THREE from '../lib/three.min.js';
import Scene from './Scene.js';
import Avatar from './Avatar.js';

class Game {
    constructor() {
        this.scene = new Scene();
        this.avatar = new Avatar();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.scene.add(this.avatar.model);

        this.animate = this.animate.bind(this);
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.avatar.update();
        this.renderer.render(this.scene.scene, this.scene.camera);
    }
}

export default Game;
