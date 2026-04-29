import express from 'express';
import { router as routerFromLedgerNames } from "./LedgerNames/end-points.js";
import { router as routerFromStockItems } from "./StockItems/end-points.js";
import { router as routerFromV1 } from "./V1/routes.js";

const router = express.Router();

router.use('/LedgerNames', routerFromLedgerNames);
router.use('/StockItems', routerFromStockItems);
router.use('/V1', routerFromV1);

export { router };