import express from 'express';
import { findFunc } from "./Find/controller.js";

const tableName = "BillsTable";

const router = express.Router();
router.get('/Find/:pk', (req, res) => findFunc({ req, res, inTableName: tableName }));

export { router };