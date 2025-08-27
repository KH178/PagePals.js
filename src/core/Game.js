import * as THREE from 'three';
import Scene from './Scene.js';
import Avatar from './Avatar.js';
import Physics from './Physics.js';

class Game {
    constructor(gameWindow, gameDocument) {
        this.gameWindow = gameWindow;
        this.gameDocument = gameDocument;

        this.scene = new Scene(this.gameWindow);
        this.avatar = new Avatar();
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.gameWindow.innerWidth, this.gameWindow.innerHeight);
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.pointerEvents = 'none';
        document.body.appendChild(this.renderer.domElement);
        this.physics = new Physics(this.scene.scene, this.gameDocument, this.scene.camera, this.renderer);

        this.scene.add(this.avatar.model);

        this.animate = this.animate.bind(this);

        setTimeout(() => this.physics.scanText(), 100);

        document.getElementById('debug-toggle').addEventListener('click', () => {
            this.physics.toggleDebug();
        });
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.avatar.update();
        this.physics.detectCollisions(this.avatar);
        this.renderer.render(this.scene.scene, this.scene.camera);
    }
}

export default Game;