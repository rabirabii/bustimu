import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonial = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
              Have a look at what our customers say
            </h2>
          </div>
          <div className="mt-8 text-center md:order-3 md:mt-16">
            <Button
              className={cn(
                `mb-20 rouded-lg border-2 px-6 py-2 font-medium text-white transition hover:translate-y-1`
              )}
            >
              More Reviews on Google Reviews
            </Button>
          </div>
          <div className="relative mt-10 md:order-2 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
            </div>
            <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
              <div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                  <div class="flex-1">
                    <div class="flex items-center space-x-1">
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                    </div>
                    <blockquote className="mt-8 flex-1">
                      <p className="font-[400] text-xl italic text-slate-900">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Animi ducimus repellat aperiam quam consequatur
                        eligendi totam vitae iusto mollitia esse.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center">
                    <Avatar className={cn(`h-11 w-11 flex shrink-0 `)}>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/94340897?v=4" />
                      <AvatarFallback>Test</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="text-base font-bold text-slate-800">
                        Jejes
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500 ">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                  <div class="flex-1">
                    <div class="flex items-center space-x-1">
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                    </div>
                    <blockquote className="mt-8 flex-1">
                      <p className="font-[400] text-xl italic text-slate-900">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Animi ducimus repellat aperiam quam consequatur
                        eligendi totam vitae iusto mollitia esse.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center">
                    <Avatar className={cn(`h-11 w-11 flex shrink-0 `)}>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/94340897?v=4" />
                      <AvatarFallback>Test</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="text-base font-bold text-slate-800">
                        Jejes
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500 ">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                  <div class="flex-1">
                    <div class="flex items-center space-x-1">
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                      <FaStar color="#f6b100" size={12} />
                    </div>
                    <blockquote className="mt-8 flex-1">
                      <p className="font-[400] text-xl italic text-slate-900">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Animi ducimus repellat aperiam quam consequatur
                        eligendi totam vitae iusto mollitia esse.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center">
                    <Avatar className={cn(`h-11 w-11 flex shrink-0 `)}>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/94340897?v=4" />
                      <AvatarFallback>Test</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="text-base font-bold text-slate-800">
                        Jejes
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500 ">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
