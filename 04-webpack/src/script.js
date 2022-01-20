import './style.css'
import * as THREE from 'three'
console.log(THREE);
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui'
// const gui = new dat.GUI();
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xff22ff
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
const sizes = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75, sizes.width /sizes.height);
camera.position.z = 2;
camera.position.x = -1;
camera.position.y = 0.3;
scene.add(camera);
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
