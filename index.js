console.log('Script loaded');

const canvas = document.querySelector('.canvas-title');
const context = canvas.getContext('2d');

const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0', 'magenta');
gradient.addColorStop('1', 'yellow');
// gradient.addColorStop('1.0', 'red');

context.font = '5rem Poppins';
context.strokeStyle = gradient;
context.strokeText('Recursos', 60, 90);

console.log(canvas);
