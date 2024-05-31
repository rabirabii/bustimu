import React from "react";
import { FaIceCream } from "react-icons/fa";
import Sponsor1 from "../../assets/sponsor1.png";
import Sponsor2 from "../../assets/sponsor2.png";
import Sponsor3 from "../../assets/sponsor3.png";
import Sponsor4 from "../../assets/sponsor4.png";
const Sponsor = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
        <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase tracking-wider">
          Our Sponsor
        </p>
        <div className="flex items-center text-gray-500 hover:text-gray-800">
          <img src={Sponsor1} className="w-auto h-16" />
        </div>
        <div className="flex items-center text-gray-500 hover:text-gray-800">
          <img src={Sponsor2} className="w-auto h-16" />
        </div>
        <div className="flex items-center text-gray-500 hover:text-gray-800">
          <img src={Sponsor3} className="w-auto h-16" />
        </div>
        <div className="flex items-center text-gray-500 hover:text-gray-800">
          <img src={Sponsor4} className="w-auto h-16" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
