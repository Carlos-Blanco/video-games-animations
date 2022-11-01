const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 300;

const playerImage = new Image();
playerImage.src = '/images/bernard.png';

const spriteWidth = 112;
const spriteHeight = 156;

let frameX = 5;
let frameY = 0;

console.log(playerImage.src)
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if (frameX < 6) frameX++
  else frameX=0;
  requestAnimationFrame(animate);
}

animate();