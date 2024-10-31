import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaMapMarker, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const JobDetailsPage = ({ deleteJob }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;

    deleteJob(jobId);
    toast.success("Job Deleted Successfully");
    navigate("/jobs");
  };

  return (
    <>
      <section className="bg-gray-900 py-6">
        <div className="container mx-auto px-6">
          <Link
            to="/jobs"
            className="text-indigo-400 hover:text-indigo-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <main className="md:col-span-2">
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                <div className="text-gray-400 mb-4 uppercase">{job.type}</div>
                <h1 className="text-4xl font-semibold text-white mb-6">{job.title}</h1>
                <div className="flex items-center text-gray-400 mb-6">
                  <FaMapMarker className="text-red-500 mr-2" />
                  <span>{job.location}</span>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-indigo-300 mb-4">Job Description</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>

                  <h2 className="text-xl font-bold text-indigo-300 mb-4">Salary</h2>
                  <p className="text-gray-300 leading-relaxed">{job.salary}</p>
                </div>
              </div>
            </main>

            <aside>
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6">Company Info</h3>
                <h4 className="text-xl font-bold text-indigo-300">{job.company.name}</h4>
                <p className="text-gray-300 mt-4 mb-6">{job.company.description}</p>

                <hr className="my-6 border-gray-700" />

                <div>
                  <h4 className="text-lg font-semibold text-gray-400">Contact Email</h4>
                  <p className="text-indigo-300 bg-gray-800 p-3 rounded mt-2">{job.company.contactEmail}</p>

                  <h4 className="text-lg font-semibold text-gray-400 mt-6">Contact Phone</h4>
                  <p className="text-indigo-300 bg-gray-800 p-3 rounded mt-2">{job.company.contactPhone}</p>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg shadow-lg mt-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Manage Job</h3>
                <Link
                  to={`/edit-jobs/${job.id}`}
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg mt-4"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobDetailsPage as default, jobLoader };
