
import * as THREE from 'three';

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
