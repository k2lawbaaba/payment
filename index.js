// index.js file

// import dotenv from "dotenv";
import router from "./routers/routers.js";
import express from "express";
const app = express();
import webhookRoute from "./routers/webhookRoute.js";

const port = process.env.PORT || 3001;
// Parse incoming requests with JSON payloads
app.use(express.json({ limit: "50mb" }));

// Call the routers
app.use("/api/web", webhookRoute);
app.use("/api", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
