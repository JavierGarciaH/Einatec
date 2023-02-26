class Robot {
  constructor(x, y, f) {
    this.x = Number(x);
    this.y = Number(y);
    this.f = Number(f);
  }

  static create(x, y, f) {
    this.instance = new Robot(x, y, f);
    return this.instance;
  }

  static getInstance() {
    if (this.instance) return this.instance;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  turnLeft() {
    this.f = this.f === 0 ? 3 : this.f - 1;
  }

  turnRight() {
    this.f = (this.f + 1) % 4;
  }

  getPosition() {
    return { x: this.x, y: this.y, f: this.f };
  }

  getNextPosition() {
    let x = this.x;
    let y = this.y;
    switch (this.f) {
      case 0:
        y += 1;
        break;
      case 1:
        x += 1;
        break;
      case 2:
        y -= 1;
        break;
      case 3:
        x -= 1;
        break;
    }
    return { x, y };
  }
}

module.exports = Robot;
