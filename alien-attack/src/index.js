const canvas = document.querySelector('#canvas');
const canvasComputedStyle = window.getComputedStyle(canvas);
const width = parseInt(canvasComputedStyle.width) * 2;
const height = parseInt(canvasComputedStyle.height) * 2;

const game = new AlienAttack(canvas, {
  width,
  height,
  backgroundColor: '#272727',
  images: ['./images/ufo.png', './images/aircraft.png']
});