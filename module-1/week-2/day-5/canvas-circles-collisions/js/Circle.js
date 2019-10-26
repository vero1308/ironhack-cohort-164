import utils from "./_utils.js";

const lineWidth = 5;
const minVelocity = 3;
const maxVelocity = 4;

export default class Circle {
  constructor(ctx, x, y, radius, color, isFull, name, mass) {
    this.ctx = ctx;
    this.isFull = Boolean(isFull);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.originalColor = color;
    this.velocity = {
      x: Math.floor(Math.random() * (maxVelocity - minVelocity) + minVelocity),
      y: Math.floor(Math.random() * (maxVelocity - minVelocity) + minVelocity)
    };
    this.mass = mass || 1;
    this.isCollide = false;
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

  // implements circles collision detection + reaction
  handleCollision(circles) {
    for (let i = 0; i < circles.length; i++) {
      if (this === circles[i]) continue;
      if (
        utils.getDistance(this.x, this.y, circles[i].x, circles[i].y) -
          this.radius * 2 <
        0
      ) {
        this.isCollide = true;
        console.log("KABOOM : collision");
        utils.resolveCollision(this, circles[i]);
      } else {
        this.isCollide = false;
      }
    }
  }

  handleBorderCollision() {
    // prevent circles to go out the screen
    if (
      this.x + lineWidth - this.radius <= 0 ||
      this.x + lineWidth + this.radius >= innerWidth
    ) {
      this.velocity.x = -this.velocity.x;
    } else if (
      this.y - this.radius <= lineWidth ||
      this.y + lineWidth + this.radius >= innerHeight
    ) {
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  update(circles) {
    if (!circles) this.draw();
    this.handleBorderCollision();
    this.handleCollision(circles);
   
    this.draw();
  }
}
