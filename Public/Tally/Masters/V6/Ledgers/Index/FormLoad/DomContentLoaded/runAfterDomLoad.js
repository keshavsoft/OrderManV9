import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    hookAllListeners();
};

export { runAfterDomLoad };
