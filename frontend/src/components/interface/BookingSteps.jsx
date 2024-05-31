import {
  ArrowRight,
  ChevronRightCircleIcon,
  ChevronRightIcon,
  LogInIcon,
} from "lucide-react";
import React from "react";
import { FaCarSide, FaMapMarkedAlt } from "react-icons/fa";

const BookingSteps = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-slate-700 uppercase rounded-full bg-slate-100 ">
            How it Works?
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:mx-auto">
          <span className="relative">Our</span> {""}
          Working Steps
        </h2>
        <p className="text-base text-slate-700 md:text-lg">Lorem Ipsum</p>
      </div>
      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div className="relative text-center">
          <div className="flex items-center justify-center mx-auto mb-4 rouded-full sm:w-20 sm:h-20">
            <LogInIcon
              size={24}
              className=" hover:text-orange-300 transition-colors ease-in"
            />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Step 1</h6>
          <p>Create the account or Login if you already have the account</p>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <ArrowRight size={16} />
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center mx-auto mb-4 rouded-full sm:w-20 sm:h-20">
            <FaCarSide
              size={24}
              className=" hover:text-orange-300 transition-colors ease-in"
            />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Step 2</h6>
          <p>Create the account or Login if you already have the account</p>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <ArrowRight size={16} />
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center mx-auto mb-4 rouded-full sm:w-20 sm:h-20">
            <FaMapMarkedAlt
              size={24}
              className=" hover:text-orange-300 transition-colors ease-in"
            />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Step 3</h6>
          <p>Create the account or Login if you already have the account</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
