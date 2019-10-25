import utils from "./utils.js";

const lineWidth = 10;


export default class Circle {
  constructor(ctx, x, y, radius, color, isFull) {
    this.ctx = ctx;
    this.isFull = Boolean(isFull);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: Math.floor(Math.random() * (4 - 3) + 3),
      y: Math.floor(Math.random() * (4 - 3) + 3)
    };
    this.mass = 1;
  }

  draw() {
    const style = this.isFull ? "fillStyle" : "strokeStyle";
    const fill = this.isFull ? "fill" : "stroke";
    this.ctx.beginPath();
    this.ctx.lineWidth = lineWidth;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx[style] = this.color;
    this.ctx[fill]();
    this.ctx.closePath();
  }

  update(circles) {
    if (!circles) return this.draw();

    // implements circles collision detection + reaction
    for (let i = 0; i < circles.length; i++) {
      if (this === circles[i]) continue;
      if (
        utils.getDistance(this.x, this.y, circles[i].x, circles[i].y) -
          this.radius * 2 <
        0
      ) {
        console.log("KABOOM : collision");
        utils.resolveCollision(this, circles[i]);
      }
    }

    // prevent circles to go out the screen
    if (this.x + lineWidth - this.radius <= 0 || this.x + lineWidth + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
    } else if (
      this.y - this.radius <= lineWidth ||
      this.y + lineWidth + this.radius >= innerHeight
    ) {
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.draw();
  }
}
