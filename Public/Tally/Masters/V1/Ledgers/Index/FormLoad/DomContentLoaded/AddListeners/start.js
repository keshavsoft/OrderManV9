import { funcToRun as funcToRunForLedgersHtmlId } from "./LedgersHtmlId/start.js";

import { funcToRun as funcToRunForImportHtmlId } from "./ImportHtmlId/start.js";

const hookAllListeners = () => {
    funcToRunForLedgersHtmlId();
    funcToRunForImportHtmlId();

};

export { hookAllListeners };