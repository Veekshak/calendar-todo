import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";

function Navbar({ monthAndYear, onNextMonth, onPrevMonth }) {
  const currentMonthandYear = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const isThisMonth = currentMonthandYear === monthAndYear;

  return (
    <nav className="flex flex-row justify-between items-center max-w-[1440px] p-4 lg:p-8 z-24 mx-auto relative w-full">
      <div>
        <h1
          className={`text-2xl lg:text-4xl font-bold ${
            isThisMonth && "text-blue-600"
          }`}
        >
          {monthAndYear}
        </h1>
      </div>
      <div className="flex flex-row gap-4 lg:gap-6">
        <IoIosArrowBack
          onClick={onPrevMonth}
          className="flex justify-center items-center rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10 text-white bg-black"
        />
        <IoIosArrowForward
          onClick={onNextMonth}
          className="flex justify-center items-center rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10 text-white bg-black"
        />
      </div>
    </nav>
  );
}

export default Navbar;
