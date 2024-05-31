import React from "react";
import { BusTypes } from "@/utilities/BusTypes";
const BusTypeFilter = ({ selectedBusTypes = [], onChange }) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Bus Type</h4>
      {BusTypes.map((BusType) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={BusType}
            checked={selectedBusTypes.includes(BusType)}
            onChange={onChange}
          />
          <span>{BusType}</span>
        </label>
      ))}
    </div>
  );
};

export default BusTypeFilter;
