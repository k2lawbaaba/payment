// index.js file

// import dotenv from "dotenv";
import router from "./routers/routers.js";
import express from "express";
const app = express();
import bodyParser from "body-parser";

const port = process.env.PORT || 3001;
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Call the routers
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
