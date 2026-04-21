import express from 'express';
import { deleteByColumnFunc } from "./DeleteByColumn/controller.js";

const tableName = "ItemsTable";

const router = express.Router();
router.delete('/DeleteByColumn', (req, res) => deleteByColumnFunc({ req, res, inTableName: tableName }));

export { router };