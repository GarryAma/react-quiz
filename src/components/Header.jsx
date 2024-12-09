import React from "react";
import logo from "../assets/react-logo.png";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center m-10">
        <div className="w-14 sm:w-24 md:w-28">
          <img src={logo} className="w-full h-auto animate-spinCustom" />
        </div>
        <p className="text-white text-lg sm:text-xl tracking-custom_xs sm:tracking-md">
          REACT QUIZ
        </p>
      </div>
    </header>
  );
};

export default Header;
