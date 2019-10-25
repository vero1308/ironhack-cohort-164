import utils from "./utils.js";
import Circle from "./Circle.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const circleLimit = 200;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

const colors = ["#DA2864", "#F08080", "#F3E9AB", "#8EE6BB", "#16A2A8"];

// Event Listeners
addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects

// Implementation
let player;
let circle1;
let circle2;
let circles;

function addCircle() {
  let radius = utils.getRandomRadius(30, 50);
  let x = utils.randomIntFromRange(radius, canvas.width - radius);
  let y = utils.randomIntFromRange(radius, canvas.height - radius);
  let color = utils.getRandomColor(colors);

  for (let j = 0; j < circles.length; j++) {
    if (utils.getDistance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
      x = utils.randomIntFromRange(radius, canvas.width - radius);
      y = utils.randomIntFromRange(radius, canvas.height - radius);
      j = -1; // reset if overlap
    }
  }

  circles.push(new Circle(ctx, x, y, radius, color));
}

function setPlayer() {
  player.x = mouse.x;
  player.y = mouse.y;
  player.update();
}
console.log((innerWidth - 30) / 2);

// launch the game
function init() {
  //   circle1 = new Circle(ctx, 300, 300, 100, "darkorange");
  //   circle2 = new Circle(ctx, 10, 10, 30, "dodgerblue");
  player = new Circle(ctx, (innerWidth - 30) / 2, (innerHeight - 30) / 2, 10, "black", true);
  circles = [];
  circles.push(player);

  window.setInterval(() => {
    if (circles.length < circleLimit) addCircle();
  }, 100);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach(circle => {
    circle.update(circles);
  });

  setPlayer();

  //   simpleTest()
}

init();
animate();



// function simpleTest() {
//   circle1.update();

//   circle2.x = mouse.x;
//   circle2.y = mouse.y;
//   circle2.update();

//   let distance = utils.getDistance(circle1.x, circle1.y, circle2.x, circle2.y);

//   console.log(distance);

//   if (distance < circle1.radius + circle2.radius) {
//     circle1.color = "dodgerblue";
//   } else {
//     circle1.color = "darkorange";
//   }
// }
