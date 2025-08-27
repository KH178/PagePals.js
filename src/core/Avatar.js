
import * as THREE from '../lib/three.min.js';

class Avatar {
    constructor() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        this.model = new THREE.Mesh(geometry, material);
    }

    update() {
        this.model.rotation.x += 0.01;
        this.model.rotation.y += 0.01;
    }
}

export default Avatar;
