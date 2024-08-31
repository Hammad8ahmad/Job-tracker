import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../config";

// Hook for fetching jobs

const useFetchJobs = () => {
  const fetchJobs = async () => {
    try {
      const response = await fetch(`${apiUrl}/jobs`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error; // Ensure the error is thrown to be caught by `useQuery`
    }
  };
  return useQuery({ queryKey: ["jobs"], queryFn: fetchJobs });
};

export default useFetchJobs;
