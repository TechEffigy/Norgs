class Timer {
  constructor() {
    this.time = Date.now();
  }
  start() {
    this.time = Date.now();
  }
  check() {
    return (Date.now() - this.time) / 1000;
  }
}

export default Timer;
