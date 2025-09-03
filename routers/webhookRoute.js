// routers/routers.js file

import express from "express";
const router = express.Router();

import getWebhookEvent from "../controllers/webhook.js";
import bodyParser from "body-parser";

router.post(
  "/webhook",
  bodyParser.raw({ type: "*/*" }),
  getWebhookEvent.webhookEvents
);

export default router;
