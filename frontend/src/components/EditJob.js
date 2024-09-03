import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { apiUrl } from "../config";

// Function to update the job
const updateJob = async (job_id, updatedJob) => {
  const response = await fetch(`${apiUrl}/jobs/${job_id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedJob),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update the job");
  }

  return response.json();
};

const EditJob = ({ job, onClose }) => {
  const [company, setCompany] = useState(job.company);
  const [position, setPosition] = useState(job.position);
  const [status, setStatus] = useState(job.status);
  const [location, setLocation] = useState(job.location);
  const [type, setType] = useState(job.type);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (updatedJob) => updateJob(job.job_id, updatedJob),
    onSuccess: () => {
      queryClient.invalidateQueries(["jobs"]);
      onClose();
    },
    onError: (error) => {
      console.error("Error updating job:", error);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedJob = { company, position, status, location, type };
    mutation.mutate(updatedJob);
  };

  return (
    <div className="modal-content dark:bg-neutral-900 dark:text-gray-200 p-6 rounded-lg shadow-lg relative">
      <h3 className="text-lg font-semibold mb-4">Edit Job</h3>
      <form onSubmit={submitHandler} className="space-y-4">
        {[
          {
            label: "Company",
            value: company,
            setter: setCompany,
            type: "text",
          },
          {
            label: "Position",
            value: position,
            setter: setPosition,
            type: "text",
          },
          {
            label: "Location",
            value: location,
            setter: setLocation,
            type: "text",
          },
        ].map(({ label, value, setter, type }) => (
          <div key={label}>
            <label className="block text-left">{label}:</label>
            <input
              type={type}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
        ))}
        <div>
          <label className="block text-left">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:border-gray-600 dark:text-gray-100"
          >
            <option>Passed</option>
            <option>Failed</option>
            <option>Pending</option>
          </select>
        </div>
        <div>
          <label className="block text-left">Job Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:border-gray-600 dark:text-gray-100"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-2 px-4"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg py-2 px-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
