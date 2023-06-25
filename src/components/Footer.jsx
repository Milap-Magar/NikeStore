import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-indigo-900 ">
        <div className="flex mt-10 px-6 py-10">
          <div className="md:flex md:justify-center md:items-center">
            <nav>
              <a href="/">
                <img
                  src={logo}
                  alt="assests/logo"
                  className="w-17 h-10 filter brightness-0 px-1 cursor-pointer justify-start "
                />
              </a>
            </nav>
          </div>
          <div className="flex items-center justify-center pl-80 md:pl-32">
            <nav>
              <ul className="flex justify-center text-center font-normal md:font-thin md:flex-col ">
                <li>
                  <a
                    href="/home"
                    className="hover:text-black text-slate-100 pr-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="hover:text-black text-slate-100 px-3"
                  >
                    Visit Store
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-black text-slate-100 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-black text-slate-100 px-3"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex items-center justify-center">
           <h1 className="text-slate-200 font-thin">© copyright from NIKE official NIKE-Alabama</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
