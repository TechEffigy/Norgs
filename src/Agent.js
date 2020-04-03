import Point from "./Point";
import { clipMinMax, magnifyVecTo1 } from "./utils";
import { GRID_BLOCK_SIZE, GRID_SIZE } from "./constants";
import NeuralNetwork from "./NeuralNetwork";

const learningRate = 2;

class Agent {
  constructor() {
    this.point = new Point(
      Math.random() * GRID_SIZE,
      Math.random() * GRID_SIZE
    );
    this.neuralNet = new NeuralNetwork(5, 2 ** 3, 2);
    this.bestVec = [...this.neuralNet.weights];
    this.bestRewards = 0;
    this.rewards = 0;
    this.vel = Array(this.neuralNet.numWeights).fill(0);
  }

  update(heatmap) {
    let posX = Math.trunc(this.point.x);
    let posY = Math.trunc(this.point.y);

    let input = heatmap.get5PointRadius(new Point(posX, posY));
    input = input.map(i => i / 255);
    input = magnifyVecTo1(input);

    let output = this.neuralNet.feedFoward(input);

    this.point.x += output[0];
    this.point.y += output[1];

    this.point.wrap(new Point(GRID_SIZE, GRID_SIZE));
  }

  draw(display, c) {
    display.drawRect(
      Math.trunc(this.point.x * GRID_BLOCK_SIZE),
      Math.trunc(this.point.y * GRID_BLOCK_SIZE),
      GRID_BLOCK_SIZE,
      GRID_BLOCK_SIZE,
      c
    );
  }

  learnFrom(topAgent) {
    if (this.rewards > this.bestRewards) {
      this.bestVec = [...this.neuralNet.weights];
      this.bestRewards = this.rewards;
    }

    let globalTopVec = topAgent.neuralNet.weights;
    let agentVec = this.neuralNet.weights;

    for (let i = 0; i < agentVec.length; i++) {
      let gBestVec =
        (globalTopVec[i] - agentVec[i]) * learningRate * Math.random();
      let lBestVec =
        (this.bestVec[i] - agentVec[i]) * learningRate * Math.random();
      this.vel[i] = 0.72 * this.vel[i] + gBestVec + lBestVec;
      agentVec[i] += this.vel[i];
      agentVec[i] = clipMinMax(agentVec[i], -1, 1);
    }
  }

  reward(p = 1) {
    this.rewards += p;
  }
}

export default Agent;
