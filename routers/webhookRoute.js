// routers/routers.js file

import express from "express";
const router = express.Router();

import getWebhookEvent from "../controllers/webhook.js";
import bodyParser from "body-parser";

router.post("/web/webhook", getWebhookEvent.webhookEvents);

export default router;
bodyParser.raw({ type: "*/*" });
