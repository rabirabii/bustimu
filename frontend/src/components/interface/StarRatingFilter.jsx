import React from "react";

import Ratings from "./Ratings";

const StarRatingFilter = ({ selectedStars = [], onChange }) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Bus Rating</h4>
      {["5", "4", "3", "2", "1"].map((star, index) => (
        <label className="flex items-center space-x-2" key={star}>
          <input
            type="checkbox"
            className="rounded"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />
          <Ratings rating={5 - index} />
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
