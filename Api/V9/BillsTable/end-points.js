import express from 'express';
import { deleteFunc } from "./Delete/controller.js";

const tableName = "BillsTable";

const router = express.Router();
router.delete('/Delete/:pk', (req, res) => deleteFunc({ req, res, inTableName: tableName }));

export { router };