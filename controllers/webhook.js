import dotenv from "dotenv";
dotenv.config();
import crypto from "crypto";

const webhooks = {
  webhookEvents: async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Raw Buffer:", req.body); // Should be <Buffer ...>
    console.log("As string:", req.body?.toString());
    // const secret = process.env.PAYSTACK_SECRET_KEY;

    // const hash = crypto
    //   .createHmac("sha512", secret)
    //   .update(req.rawBody || JSON.stringify(req.body))
    //   .digest("hex");

    // if (hash == req.headers["x-paystack-signature"]) {
    //   // Retrieve the request's body
    //   const event = req.body;
    //   // Do something with event
    //   if (event && event.event === "transfer.success") {
    //     return res
    //       .status(200)
    //       .json({ message: "Transfer successful", webhookEvent: event });
    //   }
    // }

    res.send(200);
  },
};
const getWebhookEvent = webhooks;

export default getWebhookEvent;
