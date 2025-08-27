import * as THREE from "three";

class TextCollision {
  constructor(scene, gameDocument, camera, renderer) {
    this.scene = scene;
    this.gameDocument = gameDocument;
    this.camera = camera;
    this.renderer = renderer;
    this.collisionBoxes = [];
    this.debug = false;
    this.debugGroup = new THREE.Group();
    this.scene.add(this.debugGroup);
  }

  scanText() {
    this.clearDebug();
    this.collisionBoxes = [];
    const textElements = this.gameDocument.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, a, span, li, text"
    );
    textElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Convert screen coordinates to world coordinates
      const width = this.renderer.domElement.clientWidth;
      const height = this.renderer.domElement.clientHeight;

      const topLeft = new THREE.Vector3(
        (rect.left / width) * 2 - 1,
        -(rect.top / height) * 2 + 1,
        0 // Z-coordinate, adjust as needed
      );
      const bottomRight = new THREE.Vector3(
        (rect.right / width) * 2 - 1,
        -(rect.bottom / height) * 2 + 1,
        0 // Z-coordinate, adjust as needed
      );

      topLeft.unproject(this.camera);
      bottomRight.unproject(this.camera);

      const box = new THREE.Box3();
      box.setFromPoints([topLeft, bottomRight]);
      this.collisionBoxes.push(box);

      if (this.debug) {
        const helper = new THREE.Box3Helper(box, 0xff00ff);
        this.debugGroup.add(helper);
      }
    });
  }

  toggleDebug() {
    this.debug = !this.debug;
    this.scanText();
  }

  clearDebug() {
    while (this.debugGroup.children.length > 0) {
      this.debugGroup.remove(this.debugGroup.children[0]);
    }
  }
}

export default TextCollision;
