import { GRID_BLOCK_SIZE, GRID_SIZE, NUM_FOOD } from "./constants";
import Point from "./Point";

class Food {
  constructor(numFood) {
    this.points = Array(numFood).fill(0);

    for (let i = 0; i < NUM_FOOD; i++) {
      this.points[i] = new Point(
        Math.trunc(Math.random() * GRID_SIZE),
        Math.trunc(Math.random() * GRID_SIZE)
      );
    }
  }

  draw(display) {
    this.points.forEach(p => {
      display.drawRect(
        p.x * GRID_BLOCK_SIZE,
        p.y * GRID_BLOCK_SIZE,
        GRID_BLOCK_SIZE,
        GRID_BLOCK_SIZE,
        "white"
      );
    });
  }

  checkCollision(point) {
    for (let i = 0; i < NUM_FOOD; i++) {
      if (this.points[i].equals(point)) {
        this.points[i] = new Point(
          Math.trunc(Math.random() * GRID_SIZE),
          Math.trunc(Math.random() * GRID_SIZE)
        );
        return true;
      }
    }
    return false;
  }
}

export default Food;
