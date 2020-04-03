import {
  DISPLAY_WIDTH,
  DISPLAY_HEIGHT,
  DISPLAY_BACKGROUND_COLOR
} from "./constants";

class Display {
  constructor() {
    this.canvas = document.getElementById("display");
    this.context = this.canvas.getContext("2d");
  }

  clear() {
    this.drawRect(
      0,
      0,
      DISPLAY_WIDTH,
      DISPLAY_HEIGHT,
      DISPLAY_BACKGROUND_COLOR
    );
  }

  drawRect(x, y, w, h, color = "white") {
    const ctx = this.context;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  drawCircle(x, y, r, color = "white") {
    const ctx = this.context;
    ctx.beginPath();
    ctx.arc(x - r, y - r, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
  }

  drawLine(fromX, fromY, toX, toY, color = "white") {
    const ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  drawText(str, x, y) {
    const ctx = this.context;
    ctx.font = "16px monospace";
    ctx.fillStyle = "white";
    ctx.textBaseline = "top";
    ctx.fillText(str, 10, 10);
  }
}

export default Display;
