import express from 'express';
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromV7 } from "./V7/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";
import { router as routerFromV9 } from "./V9/routes.js";
import { router as routerFromV10 } from "./V10/routes.js";
import { router as routerFromV11 } from "./V11/routes.js";

const router = express.Router();
router.use('/V1', routerFromV1);
router.use('/V2', routerFromV2);
router.use('/V3', routerFromV3);
router.use('/V4', routerFromV4);
router.use('/V5', routerFromV5);
router.use('/V6', routerFromV6);
router.use('/V7', routerFromV7);
router.use('/V8', routerFromV8);
router.use('/V9', routerFromV9);
router.use('/V10', routerFromV10);
router.use('/V11', routerFromV11);

export { router };