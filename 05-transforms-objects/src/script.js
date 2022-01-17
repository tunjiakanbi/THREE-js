import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.x = Math.PI * 0.25;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
//POSITIONING

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
//mesh.position.set(0.7,-0.6,1)
//scene.add(mesh)

//SCALE
// mesh.scale.x = 2
// mesh.scale.y = 0.5
//mesh.scale.set(2, 0.5,0.5)

//ROTATION
// mesh.rotation.y = Math.PI * 0.5
// mesh.rotation.y = Math.PI / 2
// mesh.rotation.reorder('YXZ')//make sure to reorder before rotation to avoid a gimbal lock
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

//console.log(mesh.position.length())
//mesh.position.normalize()

//Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.set(1,1,3)
scene.add(camera)

//camera.lookAt(mesh.position);
//console.log(mesh.position.distanceTo(camera.position))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)