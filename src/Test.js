import Agent from "./Agent";

const numAgents = 15;


let P = {
  vel: 
}

P.vel[i] = w*P.vel[i] + rand()*c*(P.best[i - P.pos[i]) + rand()*c*(S.best[i - P.pos[i])
P.pos[i] = P.pos[i] + P.vel[i]


class Test {
  constructor() {
    this.agent = new Agent();
  }

  update(heatmap) {
    this.agent.update(heatmap, 11000);
  }

  draw(display) {
    this.agent.draw(display, "rgb(0, 0, 255)");
  }

  checkCollision(food) {
    food.checkCollision(this.agent.point.truncPoint());
  }
}

export default Test;
