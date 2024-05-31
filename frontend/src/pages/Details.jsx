import Ratings from "@/components/interface/Ratings";
import busData from "@/utilities/dataDummy";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formatPrice } from "@/utilities/priceUtils";
import { Button } from "@/components/ui/button";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import DescAndReview from "@/components/interface/DescAndReview";
import { Dialog } from "@/components/ui/dialog";
import DialogBooking from "@/components/interface/DialogBooking";

const Details = () => {
  const { id } = useParams();
  const busDetail = busData.data.find((bus) => bus.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(busDetail?.imgUrl[0]);

  if (!busDetail) {
    return (
      <div className="text-center text-lg font-semibold">Bus not found</div>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={selectedImage}
                    alt="Bus Image"
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {busDetail.imgUrl.map((image, index) => (
                    <button
                      key={index}
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        className="h-[36px] w-full object-cover"
                        src={image}
                        alt={`Bus Image ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {busDetail.brandBus}
            </h1>
            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <Ratings
                  rating={busDetail.rating}
                  size={10}
                  color={"#f6b100"}
                />
              </div>
              <p className="ml-2 text-sm font-medium text-slate-500">
                20 Reviews
              </p>
            </div>
            <h2 className="mt-8 text-base">Destination:</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                {busDetail.destination}
              </p>
            </div>
            <h2 className="mt-8 text-base">Route:</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              {busDetail.route.map((rute, index) => (
                <p
                  key={index}
                  className="rounded-lg border border-black px-6 py-2 font-bold"
                >
                  {rute}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-2xl font-bold">
                  {formatPrice(busDetail.price)}
                </h1>
              </div>
              {/* Dialog Booking */}
              <DialogBooking
                busId={busDetail.id}
                seatsAvailable={busDetail.seatsAvailable}
                price={busDetail.price}
                route={busDetail.route}
                destination={busDetail.destination}
              />
            </div>
            <div className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-slate-500">
                <MdOutlineAirlineSeatReclineNormal /> {""}
                {busDetail.seatsAvailable} seats Available
              </li>
              <li className="flex items-center text-left text-sm font-medium text-slate-500">
                <BiCheckCircle /> {""}
                Bus type : {busDetail.busType}
              </li>
            </div>
          </div>
          <DescAndReview facilities={busDetail.facilites} />
        </div>
      </div>
    </section>
  );
};

export default Details;
