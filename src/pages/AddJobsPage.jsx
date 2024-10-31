import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobs = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        companyName,
        companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);
    toast.success("Job Added Successfully");
    navigate('/jobs');
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 animate-gradient-background py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-100 text-center">
            Add New Job
          </h2>
          <form onSubmit={submitForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="type"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Job Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  id="type"
                  name="type"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Job Listing Name
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  name="title"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. Beautiful Apartment In Miami"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-300 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="salary"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Salary
                </label>
                <select
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  id="salary"
                  name="salary"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Location
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  id="location"
                  name="location"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Company Location"
                  required
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Company Info
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Company Name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label
                  htmlFor="companyDescription"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Company Description
                </label>
                <textarea
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  id="companyDescription"
                  name="companyDescription"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  rows="4"
                  placeholder="What does your company do?"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Contact Email
                </label>
                <input
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email address for applicants"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactPhone"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Contact Phone
                </label>
                <input
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className="border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Optional phone for applicants"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-200 ease-in-out"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-background {
          background: linear-gradient(270deg, #0096c7, #073b4c, #2ec4b6);
          background-size: 600% 600%;
          animation: gradientAnimation 10s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AddJobs;
