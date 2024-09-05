import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { apiUrl } from "../config";

// Function to post a job to the server

const postJob = async (job) => {
  const response = await fetch(`${apiUrl}/jobs`, {
    method: "POST",
    body: JSON.stringify(job),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Cannot post the job");
  }
  return response.json();
};

const JobForm = ({ scrollFunc }) => {
  const queryClient = useQueryClient();
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-time");
  const [isFilled, setIsFilled] = useState(false);
  const [jobCompletion, setJobCompletion] = useState(false);

  // Mutation to handle job submission
  const mutation = useMutation({
    mutationFn: postJob,
    onSuccess: (newJob) => {
      queryClient.invalidateQueries(["jobs"]);
      scrollFunc();
      setCompany("");
      setPosition("");
      setStatus("");
      setLocation("");
      setType("");
      setJobCompletion(true);
      setTimeout(() => {
        setJobCompletion(false);
      }, 2000);
    },
    onError: (error) => {
      console.log("Error submitting job:", error);
    },
  });

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const job = { company, status, position, location, type };
    if (
      company === "" ||
      location === "" ||
      position === "" ||
      status === "" ||
      type === ""
    ) {
      setIsFilled(true);
      setTimeout(() => {
        setIsFilled(false);
      }, 2000);
    } else {
      mutation.mutate(job);
    }
  };

  return (
    <div className="flex justify-center items-center mb-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="form w-full max-w-md sm:max-w-lg bg-white dark:bg-neutral-900 dark:border-none py-6 px-6  rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          {/* Company Input */}
          <label className="text-lg text-gray-700 dark:text-gray-300">
            Company:
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 dark:border-none rounded-md p-2 focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />

          {/* Position Input */}
          <label className="text-lg text-gray-700 dark:text-gray-300">
            Position:
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 dark:border-none rounded-md p-2 focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />

          {/* Location Input */}
          <label className="text-lg text-gray-700 dark:text-gray-300">
            Location:
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 dark:border-none rounded-md p-2 focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />

          {/* Status Select */}
          <label className="text-lg text-gray-700 dark:text-gray-300">
            Status:
          </label>
          <select
            className="border-2 border-gray-300 dark:border-none rounded-md p-2 focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Applied">Applied</option>
            <option value="Pending">Pending</option>
            <option value="Passed">Passed</option>
            <option value="Failed">Failed</option>
          </select>

          {/* Job Type Select */}
          <label className="text-lg text-gray-700 dark:text-gray-300">
            Job Type:
          </label>
          <select
            className="border-2 border-gray-300 dark:border-none rounded-md p-2 focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="" disabled>
              Select job type
            </option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>

          {/* Submit Button */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-4 dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-600"
            type="submit"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Submitting..." : "Submit"}
          </button>

          {/* Validation Error Message */}
          {isFilled && (
            <div className="text-red-600 text-center mt-4 p-2 bg-red-100 dark:bg-red-900 dark:text-white border border-red-300 dark:border-red-700 rounded-md">
              Please fill all the fields!
            </div>
          )}

          {/* Error Message */}
          {mutation.isError && (
            <div className="text-red-600 text-center mt-4 p-2 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-md">
              Error: {mutation.error.message}
            </div>
          )}

          {/* Success Message */}
          {jobCompletion && (
            <div className="text-green-600 text-center mt-4 p-2 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-md">
              Job submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobForm;
