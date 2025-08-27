import * as THREE from 'three';

class Scene {
    constructor(gameWindow) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, gameWindow.innerWidth / gameWindow.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 1, 1).normalize();
        this.scene.add(light);
    }

    add(object) {
        this.scene.add(object);
    }
}

export default Scene;