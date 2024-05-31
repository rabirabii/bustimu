import React from "react";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { formatPrice } from "@/utilities/priceUtils";

const SearchResultCard = ({ bus }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center border shadow-md  transition hover:shadow-teal-100 border-slate-300 rounded-lg p-3 gap-4 md:gap-8">
      <div className="flex-shrink-0">
        <img
          src={bus.busBrandImg}
          alt={`${bus.brandBus} image`}
          className="w-[300px] h-auto md:h-auto object-cover object-center rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center mb-2">
            <Ratings rating={bus.rating} size={20} color={"#f6b100"} />
            <span className="ml-2 text-sm">{bus.busType}</span>
          </div>
          <Link
            to={`/detail/${bus.id}`}
            className="text-lg md:text-2xl font-bold cursor-pointer hover:text-blue-600"
          >
            {bus.brandBus}
          </Link>
          {/* Added Route and Destination information */}
          <div className="mt-2">
            <span className="text-sm font-medium">
              Route: {bus.route.join(" to ")}
            </span>
          </div>
          <div className="mt-1">
            <span className="text-sm font-medium">
              Destination: {bus.destination}
            </span>
          </div>
          <div className="mt-2">
            {bus.facilites.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-slate-200 p-1 rounded-lg font-medium text-xs mr-1"
              >
                {facility}
              </span>
            ))}
            {bus.facilites.length > 3 && (
              <span className="text-xs font-medium">
                +{bus.facilites.length - 3} more
              </span>
            )}
          </div>
          {/* Added seats available information */}
          <div className="mt-2">
            <span className="text-sm font-medium">
              Seats Available: {bus.seatsAvailable}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <span className="font-bold text-lg">{formatPrice(bus.price)}</span>
          <Button>
            <Link
              to={`/detail/${bus.id}`}
              className="text-md md:text-lg font-bold "
            >
              View More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
