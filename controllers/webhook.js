import dotenv from "dotenv";
dotenv.config();
import crypto from "crypto";

const webhooks = {
  webhookEvents: async (req, res) => {
    const hash = crypto
      .createHmac("sha512", secret)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (hash == req.headers["x-paystack-signature"]) {
      // Retrieve the request's body
      const event = req.body;
      // Do something with event
      if (event && event.event === "transfer.success") {
        return res
          .status(200)
          .json({ message: "Transfer successful", webhookEvent: event });
      }
    }

    res.send(200);
  },
};
const getWebhookEvent = webhooks;

export default getWebhookEvent;
