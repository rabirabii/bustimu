import { CheckCircle } from "lucide-react";
import React from "react";
import { BiWinkSmile } from "react-icons/bi";
import { MdOutlinePriceCheck } from "react-icons/md";
const Features = () => {
  return (
    <section className="text-slate-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold text-slate-900 mb-4">
            Timu's Services
          </h1>
          <div className="w-16 h-1 rounded-full bg-slate-400 inline-flex"></div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-16 h-16 inline-flex items-center justify-center bg-indigo-50 mb-5 flex-shrink-0">
              <BiWinkSmile className="w-10 h-10 hover:text-orange-400 transition-opacity ease-in-out" />
            </div>
            <div className="flex-grow">
              <h2 className="text-slate-900 text-lg font-medium mb-3">
                Convenient Booking Process
              </h2>
              <p className="leading-relaxed text-base">
                Timu offers a seamless and user-friendly booking experience,
                allowing customers to easily browse, select, and purchase bus
                tickets online.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-16 h-16 inline-flex items-center justify-center bg-indigo-50 mb-5 flex-shrink-0">
              <CheckCircle className="w-10 h-10 hover:text-orange-400 transition-opacity ease-in-out" />
            </div>
            <div className="flex-grow">
              <h2 className="text-slate-900 text-lg font-medium mb-3">
                Reliable and Secure:
              </h2>
              <p className="leading-relaxed text-base">
                Our platform prioritizes safety and reliability, ensuring that
                customers can book their tickets with confidence and peace of
                mind.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-16 h-16 inline-flex items-center justify-center bg-indigo-50 mb-5 flex-shrink-0">
              <MdOutlinePriceCheck className="w-10 h-10 hover:text-orange-400 transition-opacity ease-in-out" />
            </div>
            <div className="flex-grow">
              <h2 className="text-slate-900 text-lg font-medium mb-3">
                competitive Price
              </h2>
              <p className="leading-relaxed text-base">
                We strive to offer competitive pricing without compromising on
                quality, making travel affordable and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
