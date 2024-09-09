import { useEffect, useRef, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import useFetchJobs from "../hooks/useFetchJobs";
import JobForm from "../components/JobForm";
import JobDetails from "../components/JobDetails";

// Home component
const Home = () => {
  const { data: jobs, error, isLoading } = useFetchJobs();
  const scrollRef = useRef(null);
  const [renderCount, setRenderCount] = useState(0); // Renamed to be more descriptive

  useEffect(() => {
    if (renderCount > 1) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setRenderCount((prevCount) => prevCount + 1);
    }
  }, [jobs]); // Dependency array ensures this effect runs when jobs change

  // useEffect(() => {
  //   console.log(renderCount); // Separate effect to log updated render count
  // }, [renderCount]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <MoonLoader size={100} color="#36D7B7" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 dark:text-red-400">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="home bg-gray-100 dark:bg-gray-900">
      <JobForm />
      <div className="jobs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1280px]">
        {jobs?.map((job) => (
          <JobDetails ref={scrollRef} job={job} key={job.job_id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
