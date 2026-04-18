import express from 'express';
import { getFunc } from "./ShowAll/controller.js";
import { postFunc } from "./Insert/controller.js";
import { findFunc } from "./Find/controller.js";

const router = express.Router();
router.get('/Find/:pk', findFunc);
router.post('/Insert', express.json(), postFunc);
router.get('/ShowAll', getFunc);

export { router };