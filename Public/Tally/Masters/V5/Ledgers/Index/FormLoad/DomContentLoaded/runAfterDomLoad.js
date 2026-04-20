import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    hookAllListeners();
    // buildUi().then();
};

export { runAfterDomLoad };
