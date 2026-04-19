import express from 'express';
import { filterFunc } from "./Filter/controller.js";

const tableName = "ItemsTable";

const router = express.Router();
router.get('/Filter/:pk', (req, res) => filterFunc({ req, res, inTableName: tableName }));

export { router };