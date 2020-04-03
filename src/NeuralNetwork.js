class NeuralNetwork {
  constructor(numInputs, numHidden, numOutputs) {
    this.numInputs = numInputs;
    this.numHidden = numHidden;
    this.numOutputs = numOutputs;
    this.numWeights =
      numInputs * numHidden + numHidden * numOutputs + numHidden + numOutputs;
    this.weights = [];
    this.pulse = false;

    for (let i = 0; i < this.numWeights; i++) {
      this.weights[i] = Math.random() - Math.random();
    }
    this.activationF = x => {
      return Math.tanh(x);
    };
  }

  feedFoward(input) {
    let hidden = Array(this.numHidden);
    let output = Array(this.numOutputs);

    let weightIndex = 0;
    for (let h = 0; h < this.numHidden; h++) {
      hidden[h] = this.weights[weightIndex];
      weightIndex++;
      for (let i = 0; i < this.numInputs; i++) {
        hidden[h] += input[i] * this.weights[weightIndex];
        weightIndex++;
      }
      hidden[h] = this.activationF(hidden[h]);
    }

    for (let o = 0; o < this.numOutputs; o++) {
      output[o] = this.weights[weightIndex];
      weightIndex++;
      for (let h = 0; h < this.numHidden; h++) {
        output[o] += hidden[h] * this.weights[weightIndex];
        weightIndex++;
      }
      output[o] = this.activationF(output[o]);
    }
    return output;
  }
}

export default NeuralNetwork;
