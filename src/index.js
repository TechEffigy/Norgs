import { strict } from "assert";
import Engine from "./Engine";

const main = () => {
  const engine = new Engine();
  setInterval(() => engine.run(), 1000 / 50);
};

main();
