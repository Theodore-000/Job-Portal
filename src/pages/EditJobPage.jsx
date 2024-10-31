import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(job.company.description);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
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

    updateJobSubmit(updatedJob);
    toast.success("Job Updated Successfully");
    navigate(`/jobs/${id}`);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-12"
      style={{
        background: 'linear-gradient(270deg, #0096c7, #073b4c, #2ec4b6)',
        backgroundSize: '600% 600%',
        animation: 'gradientAnimation 10s ease infinite',
      }}
    >
      <div className="w-full max-w-3xl bg-gray-900 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">Edit Job</h2>
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate__animated animate__fadeIn animate__delay-1s">
              <label htmlFor="type" className="block text-gray-400 font-semibold mb-2">
                Job Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                id="type"
                name="type"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-2s">
              <label htmlFor="title" className="block text-gray-400 font-semibold mb-2">
                Job Listing Name
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="e.g. Beautiful Apartment In Miami"
                required
              />
            </div>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <label htmlFor="description" className="block text-gray-400 font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate__animated animate__fadeIn animate__delay-4s">
              <label htmlFor="salary" className="block text-gray-400 font-semibold mb-2">
                Salary
              </label>
              <select
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                id="salary"
                name="salary"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
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

            <div className="animate__animated animate__fadeIn animate__delay-5s">
              <label htmlFor="location" className="block text-gray-400 font-semibold mb-2">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                id="location"
                name="location"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Company Location"
                required
              />
            </div>
          </div>

          <h3 className="text-3xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-6s">
            Company Info
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate__animated animate__fadeIn animate__delay-7s">
              <label htmlFor="companyName" className="block text-gray-400 font-semibold mb-2">
                Company Name
              </label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                id="companyName"
                name="companyName"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Company Name"
              />
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-8s">
              <label htmlFor="companyDescription" className="block text-gray-400 font-semibold mb-2">
                Company Description
              </label>
              <textarea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                id="companyDescription"
                name="companyDescription"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate__animated animate__fadeIn animate__delay-9s">
              <label htmlFor="contactEmail" className="block text-gray-400 font-semibold mb-2">
                Contact Email
              </label>
              <input
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                type="email"
                id="contactEmail"
                name="contactEmail"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Email address for applicants"
                required
              />
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-10s">
              <label htmlFor="contactPhone" className="block text-gray-400 font-semibold mb-2">
                Contact Phone
              </label>
              <input
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                type="tel"
                id="contactPhone"
                name="contactPhone"
                className="bg-gray-800 border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Optional phone for applicants"
              />
            </div>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-11s">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full w-full transition-transform transform duration-300 hover:scale-105"
              type="submit"
            >
              Update Job
            </button>
          </div>
        </form>
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

export default EditJobPage;
