import BusTypeFilter from "@/components/interface/BusTypeFilter";
import FacilitesFilter from "@/components/interface/FacilitesFilter";
import PriceFilter from "@/components/interface/PriceFilter";
import SearchResultCard from "@/components/interface/SearchResultCard";
import StarRatingFilter from "@/components/interface/StarRatingFilter";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import busData from "@/utilities/dataDummy";
const Product = () => {
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedBusTypes, setSelectedBusTypes] = useState([]);
  const [selectedFacilites, setSelectedFacilities] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState();
  const [sortOption, setSortOption] = useState("");

  const searchParams = {
    stars: selectedStars,
    types: selectedBusTypes,
    facilites: selectedFacilites,
    maxPrice: selectedPrice?.toString(),
    sortOption,
  };
  const handleStarsChange = (event) => {
    const starRating = event.target.value;

    setSelectedStars((prevStars) =>
      event.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating)
    );
  };

  const handleBusTypesChange = (event) => {
    const busType = event.target.value;

    setSelectedBusTypes((prevBusTypes) =>
      event.target.checked
        ? [...prevBusTypes, busType]
        : prevBusTypes.filter((bus) => bus !== busType)
    );
  };

  const handleFacilityChange = (event) => {
    const facility = event.target.value;

    setSelectedFacilities((prevFacility) =>
      event.target.checked
        ? [...prevFacility, facility]
        : prevFacility.filter((prevFacility) => prevFacility !== facility)
    );
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mt-1 pt-2">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10 m-2">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b pb-5">Filter by:</h3>
          <StarRatingFilter
            selectedStars={selectedStars}
            onChange={handleStarsChange}
          />
          <BusTypeFilter
            selectedBusTypes={selectedBusTypes}
            onChange={handleBusTypesChange}
          />
          <FacilitesFilter
            selectedFacilites={selectedFacilites}
            onChange={handleFacilityChange}
          />
          <PriceFilter
            selectedPrice={selectedPrice}
            onChange={(value) => setSelectedPrice(value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {busData?.data.length} Bus Found
            {/* To-do Destination */}
          </span>
          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Sort By</option>
            <option value="starRating">Star Rating</option>
            <option value="priceAsc">Price(low to high)</option>
            <option value="priceDesc">Price(high to low)</option>
          </select>
        </div>
        {busData?.data.map((bus) => (
          <SearchResultCard bus={bus} />
        ))}
        <div>{/* Todo Pagination */}</div>
      </div>
    </div>
  );
};

export default Product;
