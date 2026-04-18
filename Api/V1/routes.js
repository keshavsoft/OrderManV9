import express from 'express';
import { router as routerFromLedgerNames } from "./LedgerNames/end-points.js";
import { router as routerFromItemsTable } from "./ItemsTable/end-points.js";
import { router as routerFromStockItems } from "./StockItems/end-points.js";
import { router as routerFromBillsTable } from "./BillsTable/end-points.js";

const router = express.Router();
router.use('/LedgerNames', routerFromLedgerNames);
router.use('/ItemsTable', routerFromItemsTable);
router.use('/StockItems', routerFromStockItems);
router.use('/BillsTable', routerFromBillsTable);

export { router };