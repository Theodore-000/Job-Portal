import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-1 bg-gray-900 font-[poppins]">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg shadow-lg bg-gray-900">
          <Card bg="bg-gradient-to-r from-blue-800 to-blue-600 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <h2 className="text-3xl font-extrabold text-white">
              For Developers
            </h2>
            <p className="mt-4 mb-6 text-lg text-white">
              Explore our curated list of React jobs and kickstart your career
              with the best opportunities.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-white text-indigo-600 font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-gray-800 hover:text-indigo-700 transition-colors duration-200"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-gradient-to-r from-green-800 to-green-600 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <h2 className="text-3xl font-extrabold text-white">
              For Employers
            </h2>
            <p className="mt-4 mb-6 text-lg text-white">
              Find the perfect developer for your team by listing your job with
              us today.
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-white text-green-600 font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-gray-100 hover:text-green-700 transition-colors duration-200"
            >
              Add Job
            </Link>
          </Card>
        </div>
          <hr className="border-2 border-gray-700 mx-4 " />
      </div>
    </section>
  );
};

export default HomeCards;
