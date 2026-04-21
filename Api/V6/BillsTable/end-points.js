import express from 'express';
import { findFunc } from "./Find/controller.js";
import { getFunc } from "./ShowAll/controller.js";
import { deleteFunc } from "./Delete/controller.js";

const tableName = "BillsTable";

const router = express.Router();

router.get('/ShowAll', (req, res) => getFunc({ res, inTableName: tableName }));
router.get('/Find/:pk', (req, res) => findFunc({ req, res, inTableName: tableName }));
router.delete('/Delete/:pk', (req, res) => deleteFunc({ req, res, inTableName: tableName }));

export { router };