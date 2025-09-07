// index.js file

// import dotenv from "dotenv";
import router from "./routers/routers.js";
import express from "express";
const app = express();
import webhookRoute from "./routers/webhookRoute.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 3001;
// Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));
// Call the routers
// app.use(express.json());
app.use("/api", express.json(), router);

// Webhook -> RAW body
app.use("/web", bodyParser.raw({ type: "application/json" }), webhookRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
