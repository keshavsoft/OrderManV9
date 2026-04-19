import express from 'express';
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";

const router = express.Router();
router.use('/V1', routerFromV1);
router.use('/V2', routerFromV2);
router.use('/V3', routerFromV3);
router.use('/V4', routerFromV4);
router.use('/V5', routerFromV5);
router.use('/V6', routerFromV6);

export { router };