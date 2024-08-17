import useFetchJobs from "../hooks/useFetchJobs";
import JobDetails from "../components/JobDetails";
import { useState, useEffect } from "react";
import EmptyState from "../components/EmptyState";
import MoonLoader from "react-spinners/MoonLoader";

const Jobs = () => {
  const { data: jobs, error, isLoading } = useFetchJobs();
  const [filter, setFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    if (!jobs) return;
    let filtered = [...jobs];
    switch (filter) {
      case "By date":
        filtered.sort((a, b) => b.job_id - a.job_id);
        break;
      case "By status":
        filtered.sort((a, b) => a.status.localeCompare(b.status));
        break;
      case "By location":
        filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
      default:
        filtered = jobs;
        break;
    }

    setFilteredJobs(filtered);
  }, [filter, jobs]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900">
        <MoonLoader size={100} color={"#F59E0B"} />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 dark:text-red-400">
        Error: {error.message}
      </div>
    );

  if (filteredJobs.length === 0)
    return <EmptyState filteredJobs={filteredJobs} />;

  return (
    <>
      <div className="totaljobs">
        <div className="total-jobs-container p-4 mb-6  shadow-lg rounded-lg border border-gray-200 bg-white dark:bg-neutral-800 dark:border-neutral-700 max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Total Jobs :
            <span className="ml-2 text-blue-400 dark:text-yellow-400 ">
              {filteredJobs.length}
            </span>
          </h2>
        </div>
      </div>
      <div className="job-filter mb-4 bg-gray-300 dark:bg-gray-700 ">
        <label className="text-gray-700 dark:text-gray-300"> Filter : </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 dark:border-gray-600 dark:bg-neutral-800 dark:text-gray-200"
        >
          <option value="" disabled>
            All jobs
          </option>
          <option>By date</option>
          <option>By status</option>
          <option>By location</option>
        </select>
      </div>
      <div className="jobs mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1280px]">
        {filteredJobs.map((job) => (
          <JobDetails job={job} key={job.job_id} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
