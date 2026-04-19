import express from 'express';
import { filterFunc } from "./Filter/controller.js";
import { postFunc } from "./Insert/controller.js";

const tableName = "ItemsTable";

const router = express.Router();
router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));
router.get('/Filter', (req, res) => filterFunc({ req, res, inTableName: tableName }));

export { router };