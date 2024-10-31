import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const Jobs = ({ jobs }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = jobs.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-md relative">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-gray-400 my-2 uppercase">{jobs.type}</div>
          <h3 className="text-2xl font-bold text-white">{jobs.title}</h3>
        </div>

        <div className="text-gray-300 mb-2">{description}</div>
        <button
          className="text-indigo-400 hover:text-indigo-500"
          onClick={() => setShowFullDescription((prevShow) => !prevShow)}
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mt-4 mb-2">{jobs.salary}</h3>

        <div className="border border-gray-700 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-500 mb-3 flex items-center">
            <FaMapMarker className="text-lg mr-2" />
            <span>{jobs.location}</span>
          </div>
          <a
            href={`/jobs/${jobs.id}`}
            className="h-[36px] bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
