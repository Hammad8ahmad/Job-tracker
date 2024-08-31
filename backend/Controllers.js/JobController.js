const pool = require("../database/db");

// Create job

const createJob = async (req, res) => {
  try {
    const { company, position, status, location, type } = req.body;
    console.log(req.body);

    // SQL query to insert data into the job table
    const newJob = await pool.query(
      "INSERT INTO job (company, position, status,location,type) VALUES ($1, $2, $3,$4,$5) RETURNING *",
      [company, position, status, location, type]
    );
    res.status(200).json(newJob.rows[0]);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

// Get all jobs

const getJobs = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM job");
    res.status(200).json(allTodos.rows);
  } catch (error) {
    res.status(400).json({ "error fetching jobs": error.message });
  }
};

// Get single job

const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await pool.query("SELECT * FROM job WHERE job_id = $1", [id]);
    res.status(200).json(job.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a job

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await pool.query(
      "DELETE FROM job where job_id = $1 RETURNING *",
      [id]
    );
    res.status(200).json(deletedJob.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a job

const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, status, location, type } = req.body;
    const updatedJob = await pool.query(
      "UPDATE job SET company = $1, position = $2, status = $3,location = $4,type = $5 WHERE job_id = $6 RETURNING *",
      [company, position, status, location, type, id]
    );
    res.status(200).json(updatedJob.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
};
