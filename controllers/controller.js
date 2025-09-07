// controllers/controller.js file

import dotenv from "dotenv";
dotenv.config();
import https from "https";

const payStack = {
  acceptPayment: async (req, res) => {
    try {
      console.log(req);
      // request body from the clients
      const email = req.body.email;
      const amount = req.body.amount;
      // params
      const params = JSON.stringify({
        email: email,
        amount: amount * 100,
      });
      // options
      const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: "/transaction/initialize",
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      };

      // client request to paystack API

      const paymentRequest = https
        .request(options, (resq) => {
          let data = "";

          resq.on("data", (chunk) => {
            data += chunk;
          });

          resq.on("end", () => {
            console.log(JSON.parse(data));
            return res.status(200).json(data);
          });
        })
        .on("error", (error) => {
          console.error(error);
        });

      paymentRequest.write(params);
      paymentRequest.end();
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  },
};

const initializePayment = payStack;
export default initializePayment;
