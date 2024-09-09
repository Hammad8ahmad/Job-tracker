const About = () => {
  return (
    <section className="about p-4 max-w-screen-xl mx-auto bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center dark:text-gray-100">
        About Job Tracker
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Simplify Your Job Tracking
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          Job Tracker is a streamlined job management tool designed to help you
          keep track of job applications and opportunities. Whether you're
          actively job hunting or casually exploring, Job Tracker offers a
          simple way to manage your search process effectively.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Focus
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          This platform focuses on providing a straightforward way to manage job
          listings and applications. By keeping things simple, it helps you to
          focus on finding and applying for jobs without any unnecessary
          complexity.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Key Features
        </h2>
        <ul className="list-disc pl-6 text-gray-800 leading-relaxed dark:text-gray-400">
          <li>
            <strong>Job Posting Management:</strong> Easily add and manage job
            listings.
          </li>
          <li>
            <strong>Track Your Applications:</strong> Stay organized by keeping
            track of the jobs you've applied for.
          </li>
          <li>
            <strong>Simple and User-Friendly Interface:</strong> Navigate
            through job applications and manage them with ease.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          How It Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-800 leading-relaxed dark:text-gray-400">
          <li>
            <strong>Post Job Applications:</strong>Post job applications and
            track them easily.
          </li>
          <li>
            <strong>Update Job Details:</strong>Update job details with time to
            keep track of the job status.
          </li>
          <li>
            <strong>Track Applications:</strong> Keep a record of where you have
            applied and follow up as needed.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Get in Touch
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          If you have any questions or feedback, feel free to contact me at
          <a
            href="mailto:hammad.27a@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline"
          >
            {" "}
            hammad.27a@gmail.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Start Using Job Tracker Today
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          Simplify your job search and keep track of your applications with Job
          Tracker. Start exploring job tracker now!
        </p>
      </div>
    </section>
  );
};

export default About;
