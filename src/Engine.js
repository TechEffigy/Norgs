import Display from "./Display";
import Food from "./food";
import Swarm from "./Swarm";
import Heatmap from "./Heatmap";

class Engine {
  constructor() {
    this.display = new Display();
    this.food = new Food();
    this.heatMap = new Heatmap();
    this.swarm = new Swarm();
  }

  run() {
    this.display.clear();
    this.heatMap.update(this.food);
    this.heatMap.draw(this.display);
    this.swarm.checkCollision(this.food);
    this.swarm.update(this.heatMap);
    this.swarm.draw(this.display);
    this.display.drawText(`Episode: ${this.swarm.episode}`, 0, 0);
  }
}

export default Engine;
