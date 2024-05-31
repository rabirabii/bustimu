import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../../assets/Logo.png";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-slate-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-slate-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  First
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Second
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Third
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Fourth
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-slate-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  First
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Second
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Third
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Fourth
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-slate-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  First
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Second
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Third
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-800">
                  Fourth
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-slate-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  className="leading-7 text-sm text-slate-600"
                  htmlFor="footer-field"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:bg-transparent focus:ring-2 focus:ring-orange-200 focus:border-orange-400 text-base outline-none text-slate-700 py-1 px-3 leading-0 transition-colors duration-200 ease-in-out"
                />
              </div>
              <Button
                className={cn(
                  "lg:mt-2 xl-:mt-0 flex-shrink-0 inline-flex border-0 py-2 px-6 focus:outline-none  rounded"
                )}
              >
                SUBSCRIBE
              </Button>
            </div>
            <p className="text-slate-500 text-sm mt-2 md:text-left text-center">
              Subscribe for getting latest news
              <br className="lg:block-hidden" /> and updates from your email
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-slate-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-slate-900">
            <img src={Logo} className="w-auto h-16" />
            <span className="sr-only">Logo Rentalus</span>
          </Link>
          <p className="text-sm text-slate-600 sm:ml-6 mt-4">
            &copy; 2024 Rentalus -<Link to="/">Wahyu</Link>{" "}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link>
              <FaFacebook className="w-6 h-6 hover:text-blue-700" />
            </Link>
            <Link className="ml-3">
              <FaTwitter className="w-6 h-6 hover:text-blue-400" />
            </Link>
            <Link className="ml-3">
              <FaInstagram className="w-6 h-6 hover:text-pink-400" />
            </Link>
            <Link className="ml-3">
              <FaDiscord className="w-6 h-6 hover:text-indigo-700" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
