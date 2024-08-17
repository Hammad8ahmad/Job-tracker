const express = require("express");
const app = express();
const cors = require("cors");

const jobRoutes = require("./Routes/JobRoutes");

// Middleware

app.use(cors());
app.use(express.json()); // req.body

// Routes
app.use("/jobs", jobRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log("hammad");
  next();
});

// listening to server

// Routes

// Post a new job

// app.post("/jobs", async (req, res) => {
//   try {
//     const { company, position, status } = req.body;

//     // SQL query to insert data into the job table
//     const newJob = await pool.query(
//       "INSERT INTO job (company, position, status) VALUES ($1, $2, $3) RETURNING *",
//       [company, position, status]
//     );
//     res.status(200).json(newJob.rows[0]);
//   } catch (error) {
//     res.status(200).json({ error: error.message });
//   }
// });

// //  Get all jobs

// app.get("/jobs", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM job");
//     res.status(200).json(allTodos.rows);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get a single job

// app.get("/jobs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const job = await pool.query("SELECT * FROM job WHERE job_id = $1", [id]);
//     res.status(200).json(job.rows[0]);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Update a job

// app.patch("/jobs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { company, position, status } = req.body;
//     const updatedJob = await pool.query(
//       "UPDATE job SET company = $1, position = $2, status = $3 WHERE job_id = $4 RETURNING *",
//       [company, position, status, id]
//     );
//     res.status(200).json(updatedJob.rows[0]);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete a job

// app.delete("/jobs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedJob = await pool.query(
//       "DELETE FROM job where job_id = $1 RETURNING *",
//       [id]
//     );
//     res.status(200).json(deletedJob.rows[0]);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

app.listen(5000, () => {
  console.log("server has started listening port 5000");
});
