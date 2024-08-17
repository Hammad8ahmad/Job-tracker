import useFetchJobs from "../hooks/useFetchJobs";
import { useRef } from "react";
import JobForm from "../components/JobForm";
import JobDetails from "../components/JobDetails";
import MoonLoader from "react-spinners/MoonLoader";

// Home component

const Home = () => {
  const { data: jobs, error, isLoading } = useFetchJobs();
  const scrollRef = useRef(null);

  const scrollFunc = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <MoonLoader size={100} color={"#36D7B7"} />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 dark:text-red-400">
        Error: {error.message}
      </div>
    );

  return (
    <div className="home bg-gray-100 dark:bg-gray-900">
      <JobForm scrollFunc={scrollFunc} />
      <div
        ref={scrollRef}
        className="jobs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1280px]"
      >
        {jobs && jobs.map((job) => <JobDetails job={job} key={job.job_id} />)}
      </div>
    </div>
  );
};

export default Home;
