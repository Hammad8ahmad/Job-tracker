const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./Routes/JobRoutes");

// Middleware

app.use(cors());
app.use(express.json()); // req.body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log("//every job request//");
  next();
});

// Routes
app.use("/api/jobs", jobRoutes);

// listening to server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server has started listening port 5000");
});
