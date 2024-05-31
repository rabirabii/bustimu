import React, { useState } from "react";

const DescAndReview = ({ reviews, facilities }) => {
  const [activeTab, setActiveTab] = useState("facilities");

  return (
    <div className="lg:col-span-3">
      <div className="border-b border-gray-300">
        <nav className="flex gap-4">
          <button
            className={`py-4 px-2 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-200 ease-in-out ${
              activeTab === "facilities"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "border-b-2 border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("facilities")}
          >
            Facilities
          </button>
          <button
            className={`inline-flex items-center py-4 px-2 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-200 ease-in-out ${
              activeTab === "reviews"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "border-b-2 border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
            <span className="ml-2 inline-block rounded-full bg-gray-500 px-2 py-1 text-xs font-bold text-gray-100">
              {reviews?.length === 0 ? "No Reviews" : reviews?.length}
            </span>
          </button>
        </nav>
      </div>
      <div className="mt-8 flow-root sm:mt-12">
        {activeTab === "facilities" ? (
          <div>
            <h3 className="text-lg font-semibold">Amenities</h3>
            <ul className="mt-4 list-disc pl-5">
              {facilities.map((facility, index) => (
                <li key={index} className="py-1">
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold">Reviews</h3>
            <ul className="mt-4 list-disc pl-5">
              {reviews?.length > 0 ? (
                reviews.map((review, index) => (
                  <li key={index} className="py-1">
                    {review}
                  </li>
                ))
              ) : (
                <li>No Reviews Available</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescAndReview;
