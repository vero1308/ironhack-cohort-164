import utils from "./_utils.js";
import Circle from "./Circle.js";
import Player from "./Player.js";
import { canvas, ctx } from "./_dom.js";

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.requestPointerLock();

const colors = ["#DA2864", "#F08080", "#F3E9AB", "#8EE6BB", "#16A2A8"];
const circleLimit = 40;
let player;
let circles = [];

export default class World {
  constructor() {
    this.circles = [];
    this.players = [];

    this.listenResize();
  }

  addCircle() {
    let radius = utils.getRandomRadius(30, 50);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(radius, canvas.height - radius);
    let color = utils.getRandomColor(colors);

    for (let j = 0; j < this.circles.length; j++) {
      if (
        utils.getDistance(x, y, this.circles[j].x, this.circles[j].y) - radius * 2 <
        0
      ) {
        x = utils.randomIntFromRange(radius, canvas.width - radius);
        y = utils.randomIntFromRange(radius, canvas.height - radius);
        j = -1; // reset if overlap
      }
    }

    this.circles.push(new Circle(ctx, x, y, radius, color));
  }

  animate() {
    requestAnimationFrame(() => {
      this.animate()
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.circles.forEach(circle => {
      circle.update(this.circles);
    });

    this.players.forEach(player => {
      player.update(this.circles);
    });
  }

  init(player) {

    this.players.push(player);

    this.circles.push(player);
    
    this.animate();

    window.setInterval(() => {
      if (this.circles.length < circleLimit) this.addCircle();
    }, 2000);

  }

  listenResize() {
    addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      //   init();
    });
  }
}



// import utils from "./_utils.js";
// import Circle from "./Circle.js";
// import Player from "./Player.js";
// import { canvas, ctx } from "./_dom.js";


// canvas.width = innerWidth;
// canvas.height = innerHeight;
// canvas.requestPointerLock();

// const colors = ["#DA2864", "#F08080", "#F3E9AB", "#8EE6BB", "#16A2A8"];
// const circleLimit = 40;
// let player;
// let circles = [];

// function addCircle() {
//   let radius = utils.getRandomRadius(30, 50);
//   let x = utils.randomIntFromRange(radius, canvas.width - radius);
//   let y = utils.randomIntFromRange(radius, canvas.height - radius);
//   let color = utils.getRandomColor(colors);

//   for (let j = 0; j < circles.length; j++) {
//     if (utils.getDistance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
//       x = utils.randomIntFromRange(radius, canvas.width - radius);
//       y = utils.randomIntFromRange(radius, canvas.height - radius);
//       j = -1; // reset if overlap
//     }
//   }

//   circles.push(new Circle(ctx, x, y, radius, color));
// }

// function init() {
//   animate();

//   player = new Player(
//     ctx,
//     (innerWidth - 30) / 2,
//     (innerHeight - 30) / 2,
//     10,
//     "black",
//     true,
//     "foo",
//     0
//   );

//   circles.push(player);

//   window.setInterval(() => {
//     if (circles.length < circleLimit) addCircle();
//   }, 2000);

// }

// // launch the game
// init();

// // launch the anim loop
// (function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   circles.forEach(circle => {
//     circle.update(circles);
//   });

//   player.update(circles);
// })();

// // Event Listeners

// addEventListener("resize", () => {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   init();
// });
