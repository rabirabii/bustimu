import React from "react";
import HeroImg from "../../assets/hero.png";
import { Separator } from "../ui/separator";

const CarCard = ({
  name,
  brandImg,
  thumbnail,
  price,
  gearType,
  gas,
  brand,
  facility,
  review,
  rating,
}) => {
  return (
    <section>
      <div className="w-carWidth min-h-minHeightCar max-h-minHeightCar shadow-lg bg-slate-50 flex flex-col items-center p-3 pb-4  rounded-md m-1 sm:m-3 md:m-6">
        <div className="w-full h-auto">
          <img src={HeroImg} className="w-auto h-auto" />
        </div>
        <h3 className="text-base font-bold mt-1 mb-1">Car</h3>
        <div className="w-full flex justify-start mt-3">
          <h5 className="text-orange-500 text-bold text-sm mr-3">Rp.200000</h5>
        </div>
        <Separator />
        <div className="flex w-full justify-between">
          <span className="flex items-center">
            <span className="text-slate-400 text-sm mr-1"></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CarCard;
