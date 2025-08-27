
import * as THREE from '../lib/three.min.js';

class ModelLoader {
    constructor() {
        this.loader = new THREE.ObjectLoader();
    }

    load(url) {
        return new Promise((resolve, reject) => {
            this.loader.load(url, (model) => {
                resolve(model);
            }, undefined, (error) => {
                reject(error);
            });
        });
    }
}

export default ModelLoader;
