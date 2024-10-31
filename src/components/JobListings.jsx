import Jobs from "./Jobs";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const apiUrl = isHome
    ? "/api/jobs?_limit=3"
    : "/api/jobs";

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-gray-900 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, id) => (
              <Jobs key={id} jobs={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
