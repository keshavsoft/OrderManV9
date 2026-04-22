import express from 'express';
import { postFunc } from "./Insert/controller.js";

const tableName = "BillsTable";

const router = express.Router();
router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));

export { router };