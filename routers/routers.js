// routers/routers.js file

import express from "express";
const router = express.Router();
import initializePayment from "../controllers/controller.js";

router.post("/acceptpayment", initializePayment.acceptPayment);

export default router;
