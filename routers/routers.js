// routers/routers.js file

import express from "express";
const router = express.Router();
import initializePayment from "../controllers/controller.js";
import getWebhookEvent from "../controllers/webhook.js";

router.post("/acceptpayment", initializePayment.acceptPayment);
router.post("/webhook", getWebhookEvent.webhookEvents);

export default router;
