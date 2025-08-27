
import TextCollision from './TextCollision.js';

class Physics {
    constructor(scene, gameDocument, camera, renderer) {
        this.textCollision = new TextCollision(scene, gameDocument, camera, renderer);
    }

    scanText() {
        this.textCollision.scanText();
    }

    toggleDebug() {
        this.textCollision.toggleDebug();
    }

    detectCollisions(avatar) {
        // Collision detection logic will be implemented here
    }
}

export default Physics;
