import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
console.log(gsap)
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

    //Time
    //let time = Date.now();
// gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
    //Clock
    const clock = new THREE.Clock();
//Animation
const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    //console.log(elapsedTime);
    //console.log('tick');
    //Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time;
    // console.log(deltaTime);
    // time = currentTime;
    //console.log(time);
    //Update Objects
    mesh.rotation.y = Math.cos(elapsedTime);
    mesh.position.y = Math.sin(elapsedTime);
    mesh.scale.y = Math.sin(elapsedTime) * 1.5;
    camera.lookAt(mesh.position);
    // mesh.rotation.y += 0.002 * deltaTime;
    // mesh.rotation.y += -0.01;
    // mesh.rotation.z += 0.1;

    //Render
    renderer.render(scene, camera)
    console.log('tick');
    window.requestAnimationFrame(tick)
}
tick();