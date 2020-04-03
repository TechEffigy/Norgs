import Point from "./Point";
import { GRID_SIZE, GRID_BLOCK_SIZE } from "./constants";

class Heatmap {
  constructor() {
    this.grid = Array(GRID_SIZE);
    for (let i = 0; i < GRID_SIZE; i++) {
      this.grid[i] = Array(GRID_SIZE).fill(0);
    }
  }

  update(food) {
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        let v = [];
        v[0] = this.getPoint(new Point(x + 1, y));
        v[1] = this.getPoint(new Point(x, y + 1));
        v[2] = this.getPoint(new Point(x - 1, y));
        v[3] = this.getPoint(new Point(x, y - 1));

        let avg = Math.trunc((v[0] + v[1] + v[2] + v[3]) / 4);
        this.grid[y][x] = avg;
      }
    }

    food.points.map(f => {
      this.grid[f.y][f.x] = 255;
    });
  }

  draw(display) {
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        let c = `rgb(${this.grid[y][x]},${this.grid[y][x]},${this.grid[y][x]})`;
        display.drawRect(
          x * GRID_BLOCK_SIZE,
          y * GRID_BLOCK_SIZE,
          GRID_BLOCK_SIZE,
          GRID_BLOCK_SIZE,
          c
        );
      }
    }
  }

  getPoint(point) {
    point.wrap(new Point(GRID_SIZE, GRID_SIZE));
    return this.grid[point.y][point.x];
  }

  get5PointRadius(centerPoint) {
    let vals = [];
    vals[0] = this.getPoint(new Point(centerPoint.x, centerPoint.y));
    vals[1] = this.getPoint(new Point(centerPoint.x - 1, centerPoint.y));
    vals[2] = this.getPoint(new Point(centerPoint.x + 1, centerPoint.y));
    vals[3] = this.getPoint(new Point(centerPoint.x, centerPoint.y - 1));
    vals[4] = this.getPoint(new Point(centerPoint.x, centerPoint.y + 1));
    return vals;
  }
}
export default Heatmap;
