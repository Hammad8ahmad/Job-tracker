import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { format } from "date-fns";
import EditJob from "./EditJob";
import { apiUrl } from "../config";

// Function to delete a job by ID

const deleteJob = async (job_id) => {
  const response = await fetch(`${apiUrl}/jobs/${job_id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Unable to delete the job");
  }

  return await response.json();
};

const JobDetails = ({ job, scrollRef }) => {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();
  const { company, position, status, job_id, location, type, created_at } = job;

  // Mutation for deleting a job
  const mutation = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries(["jobs"]);
    },
    onError: (error) => {
      console.error("Error deleting job: ", error);
    },
  });

  // Handle job deletion
  const deleteHandler = () => mutation.mutate(job_id);

  // Toggle editing mode
  const toggleEditMode = () => setIsEditing((prev) => !prev);

  return (
    <>
      <div
        ref={scrollRef}
        className="job-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full max-w-md mx-auto p-4 sm:p-6 dark:bg-neutral-900 dark:text-gray-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {company}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {position}
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-end">
            <span
              className={`status-badge ${
                status === "Passed"
                  ? "bg-green-500"
                  : status === "Failed"
                  ? "bg-red-500"
                  : status === "Applied"
                  ? "bg-blue-500 dark:bg-yellow-300"
                  : "bg-yellow-500 dark:bg-blue-500"
              } text-white py-2 px-3 rounded-full dark:text-gray-800 text-xs font-medium`}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Location: </span>
            {location}
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Type: </span>
            {type}
          </div>
        </div>
        <div className="text-gray-500 text-sm mb-6 dark:text-gray-400">
          Posted on {format(new Date(created_at), "MMMM d, yyyy")}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <button
            onClick={toggleEditMode}
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-2 px-4 mb-2 sm:mb-0 dark:bg-yellow-300 dark:border-none dark:hover:bg-yellow-600 dark:text-gray-800"
          >
            Edit
          </button>
          <button
            onClick={deleteHandler}
            className="btn bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg py-2 px-4 dark:bg-red-600 dark:border-none dark:hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Full-screen Modal for Editing */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white w-full max-w-lg sm:max-w-xl p-8 sm:p-6 rounded-lg  relative dark:bg-neutral-900">
            <button
              onClick={toggleEditMode}
              className="close-modal-btn absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <EditJob job={job} onClose={toggleEditMode} />
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
