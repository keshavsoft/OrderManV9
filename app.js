import { kschema } from "@keshavsoft/kschema";
import consfigJson from './config.json' with { type: 'json' };

kschema.loadConfig(consfigJson);

import { exec } from "child_process";

import express from 'express';
import http from 'http';

import { router as routerFromFromTally } from "./FromTally/routes.js";
import { router as routerFromApi } from "./Api/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromV7 } from "./V7/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));

app.use('/FromTally', routerFromFromTally);
app.use('/Api', routerFromApi);
app.use('/V6', routerFromV6);
app.use('/V7', routerFromV7);
app.use('/V8', routerFromV8);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);

    exec(`start http://localhost:${port}/Tally/Masters/V6/Ledgers/index.html`);
});