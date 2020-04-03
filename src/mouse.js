const Mouse = {
  x: 0,
  y: 0,
  init: () => {
    addEventListener("mousemove", Mouse.mouseMove, false);
  },
  mouseMove: e => {
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
  }
};
