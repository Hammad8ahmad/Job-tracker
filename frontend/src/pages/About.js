const About = () => {
  return (
    <section className="about p-6 max-w-screen-xl mx-auto bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center dark:text-gray-100">
        About Us
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Welcome to JobFinder!
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          JobFinder is your ultimate job management platform designed to
          simplify and enhance your job search process. Our goal is to connect
          job seekers with opportunities that perfectly match their skills and
          preferences, making the job search experience more efficient and
          effective.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Our Mission
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          Our mission is to provide a seamless job search experience by offering
          a user-friendly platform where you can post job listings, receive
          personalized recommendations, and track your applications—all in one
          place.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Key Features
        </h2>
        <ul className="list-disc pl-6 text-gray-800 leading-relaxed dark:text-gray-400">
          <li>
            <strong>Easy Job Posting:</strong> Quickly post and manage job
            listings with our intuitive interface.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Receive job
            suggestions tailored to your skills and preferences.
          </li>
          <li>
            <strong>Application Tracking:</strong> Stay updated on the status of
            your job applications with real-time notifications.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Meet the Team
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          JobFinder was created by a team of dedicated developers and career
          experts committed to improving the job search process.
          <a
            href="#team"
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline"
          >
            {" "}
            Meet our team
          </a>
          .
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          How It Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-800 leading-relaxed dark:text-gray-400">
          <li>
            <strong>Sign Up:</strong> Create your JobFinder profile.
          </li>
          <li>
            <strong>Explore Opportunities:</strong> Browse and apply for jobs
            that interest you.
          </li>
          <li>
            <strong>Track Applications:</strong> Monitor your application status
            and receive updates.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Looking Ahead
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          We’re continuously working to bring you new features and enhancements.
          Stay tuned for exciting updates and improvements coming soon!
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Get in Touch
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          We’d love to hear from you! For questions, feedback, or support,
          contact us at
          <a
            href="mailto:email@example.com"
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline"
          >
            {" "}
            email@example.com
          </a>{" "}
          or through our
          <a
            href="#contact"
            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline"
          >
            {" "}
            contact form
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
          Join Us Today
        </h2>
        <p className="text-gray-800 leading-relaxed dark:text-gray-400">
          Start your journey towards finding the perfect job with JobFinder.
          Sign up now and explore the opportunities waiting for you!
        </p>
      </div>
    </section>
  );
};

export default About;
