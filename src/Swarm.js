import Agent from "./Agent";
import { NUM_AGENTS } from "./constants";

class Swarm {
  constructor() {
    this.swarm = Array(NUM_AGENTS);
    this.eliteAgent = null;
    this.eliteRewards = null;
    this.eliteRate = 0;
    this.episode = 0;
    this.timeStamp = Date.now();
    for (let i = 0; i < NUM_AGENTS; i++) {
      this.swarm[i] = new Agent();
    }
  }

  update(heatmap) {
    this.teach();
    this.swarm.map(o => {
      o.update(heatmap, this.episode);
    });
  }

  draw(display) {
    this.swarm.map(o => {
      if (o == this.eliteAgent) {
        o.draw(display, "rgb(255, 0, 0)");
      } else {
        o.draw(display, "rgb(0, 255, 0)");
      }
    });
  }

  checkCollision(food) {
    this.swarm.forEach(agent => {
      if (food.checkCollision(agent.point.truncPoint())) {
        agent.reward();
      }
    });

    return false;
  }

  getTopAgent() {
    let tmpAgent = this.swarm[0];

    this.swarm.forEach(agent => {
      if (agent.rewards > tmpAgent.rewards) {
        tmpAgent = agent;
      }
    });

    return tmpAgent;
  }

  teach() {
    let topAgent = this.getTopAgent();

    if (topAgent.rewards > this.eliteRewards) {
      this.eliteAgent = topAgent;
      this.eliteRewards = topAgent.rewards;

      this.swarm.forEach(agent => {
        if (agent !== topAgent) agent.learnFrom(topAgent);
        agent.rewards = 0;
      });

      this.episode++;
      this.timeStamp = Date.now();
      console.log(`Top Agents Reward: ${this.eliteRewards}`);
    }
  }
}

export default Swarm;
