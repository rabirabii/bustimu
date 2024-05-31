import React from "react";
import { busFacilites } from "@/utilities/BusTypes";
const FacilitesFilter = ({ selectedFacilites = [], onChange }) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Bus Facility</h4>
      {busFacilites.map((facilities) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={facilities}
            checked={selectedFacilites.includes(facilities)}
            onChange={onChange}
          />
          <span>{facilities}</span>
        </label>
      ))}
    </div>
  );
};

export default FacilitesFilter;
