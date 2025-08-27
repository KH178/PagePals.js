
import * as THREE from '../lib/three.min.js';

class AnimationManager {
    constructor(model) {
        this.mixer = new THREE.AnimationMixer(model);
        this.animations = {};
    }

    addAnimation(name, clip) {
        this.animations[name] = this.mixer.clipAction(clip);
    }

    play(name) {
        const action = this.animations[name];
        if (action) {
            action.play();
        }
    }

    update(delta) {
        this.mixer.update(delta);
    }
}

export default AnimationManager;
