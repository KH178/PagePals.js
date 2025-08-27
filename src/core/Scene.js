
import * as THREE from '../lib/three.min.js';

class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
