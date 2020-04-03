class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equals(point) {
    if (this.x === point.x && this.y === point.y) {
      return true;
    } else {
      return false;
    }
  }

  truncPoint() {
    return new Point(Math.trunc(this.x), Math.trunc(this.y));
  }

  wrap(maxPoint) {
    if (this.x < 0) {
      this.x = maxPoint.x + this.x;
    }
    if (this.x >= maxPoint.x) {
      this.x = maxPoint.x - this.x;
    }
    if (this.y < 0) {
      this.y = maxPoint.y + this.y;
    }
    if (this.y >= maxPoint.y) {
      this.y = maxPoint.y - this.y;
    }
  }

  clipWrap(maxPoint) {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x >= maxPoint.x) {
      this.x = maxPoint.x - 1;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y >= maxPoint.y) {
      this.y = maxPoint.y - 1;
    }
  }
}

export default Point;
