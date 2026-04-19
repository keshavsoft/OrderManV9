import express from 'express';
import { getFunc } from "./ShowAll/controller.js";
import { postFunc } from "./Insert/controller.js";

const tableName = "BillsTable";

const router = express.Router();
router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));
router.get('/ShowAll', (req, res) => getFunc({ res, inTableName : tableName}));

export { router };