import { funcToRun as funcToRunForStockItemsHtmlId } from "./StockItemsHtmlId/start.js";

import { funcToRun as funcToRunForLedgersHtmlId } from "./LedgersHtmlId/start.js";

import { funcToRun as funcToRunForImportHtmlId } from "./ImportHtmlId/start.js";

const hookAllListeners = () => {
    funcToRunForStockItemsHtmlId();
    funcToRunForLedgersHtmlId();
    funcToRunForImportHtmlId();

};

export { hookAllListeners };