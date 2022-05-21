console.log('Script loaded');

//!! Animates the title within the canvas arear
const canvas = document.querySelector('.canvas-title');
const context = canvas.getContext('2d');

const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0', 'magenta');
gradient.addColorStop('1', 'yellow');
// gradient.addColorStop('1.0', 'red');

context.font = '5rem Poppins';
context.strokeStyle = gradient;
context.strokeText('Recursos', 60, 90);

//!! Uses Three.js to create a 3D plane and animate a cube in it.

const container = document.querySelector('#canvas-3d');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 9 / 5, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 265);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

//!! Aniamtes the canvas and places the object in it
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
animate();

//!! Adds click events to the 3D canvas

document.querySelector('#canvas-3d').addEventListener('click', () => {
  window.open('https://threejs.org/', '_blank', 'popup');
});
