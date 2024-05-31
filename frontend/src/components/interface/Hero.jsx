import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import ImgBlob from "../../assets/ImgBlob.svg";
import HeroImg from "../../assets/busHero.png";
import Searchbar from "./Searchbar";
const Hero = () => {
  return (
    <section>
      <div className="mt-24 min-h-400 w-full max-w-screen-2xl flex justify-between pl-3 pr-3 lg:px-12 ">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold text-2xl xl:text-3xl sm:text-3xl md:text-5xl mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed">
            Timu : Less Hassle,More Adventure
          </h1>
          <p className="text-xs lg:text-sm xl:text-lg sm:max-h-full text-justify overflow-hidden max-h-12 text-slate-800">
            Welcome to Timu (Ticket Mudah), your hassle-free solution for bus
            ticket reservations! Embark on your next adventure with ease as Timu
            simplifies the process of booking bus tickets, ensuring a smooth
            journey from start to finish. Say goodbye to long queues and
            complicated booking procedures with Timu, you can browse, select,
            and secure your tickets effortlessly, allowing you to focus on the
            excitement of your upcoming travels
          </p>
          <div className="mt-10 lg:mt-14 grid grid-cols-2 gap-y-4 items-center">
            <Button
              className={cn(` flex-wrap mt-4 lg:mt-0 hidden lg:flex`)}
              variant="ghost"
            >
              Ready to hit the road with ease? &rarr;
            </Button>
            <Link className={buttonVariants()}> Reserve now</Link>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex flex-col relative mt-20 pl-20 gap-y-10 ">
          <div className="relative ">
            <div className="blob-background">
              <img
                src={HeroImg}
                className="w-full max-w-xs mx-auto xl:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <Searchbar />
    </section>
  );
};

export default Hero;
