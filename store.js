import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, distpatch } = createStore(reducer);

window.distpatch = distpatch;

export { attach, connect };
