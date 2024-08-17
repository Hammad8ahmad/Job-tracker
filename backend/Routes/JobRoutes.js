const express = require("express");
const {
  createJob,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../Controllers.js/JobController");

const router = express.Router();

router.get("/", getJobs);

router.post("/", createJob);

router.get("/:id", getJob);

router.delete("/:id", deleteJob);

router.patch("/:id", updateJob);

module.exports = router;
