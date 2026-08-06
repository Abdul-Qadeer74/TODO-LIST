import React, { useEffect } from "react";
import { X, MoveRight } from "lucide-react";
import { useThemeStore } from "./Store";

const Main = () => {
  const { Darkmode, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", Darkmode);
  }, [Darkmode]);

  return (
    <div className="h-[70%] w-[98%] bg-[#c8d5e5] rounded-4xl flex items-center px-2 dark:bg-[#2b3439] dark:border-1 border-[#c8d5e5] dark:shadow-xl shadow-[black] dark:border-1 dark:border-[#b4b4b4]">
      <div className="lg:h-[90%] lg:w-[25%] h-[20%] w-[99%] bg-[#2b3439] rounded-4xl flex items-center lg:flex-col justify-evenly dark:shadow-xl shadow-[black] dark:border-1 dark:border-[#b4b4b4]">
        <div className="lg:h-[10%] lg:w-[90%] h-[80%] w-[10%] flex justify-between items-center">
          <div className="lg:h-full lg:w-[13%] h-[45%] w-[45%] rounded-4xl bg-[#c8d5e5] dark:bg-[#b4b4b4] text-[#2b3439] flex items-center justify-center lg:block hidden">
            1
          </div>
          <button className="lg:h-full lg:w-[13%] h-[45%] w-full rounded-4xl bg-red-600 dark:bg-black dark:text-white text-[#2b3439] flex items-center justify-center cursor-pointer">
            <X />
          </button>
        </div>
        <div className="lg:h-[60%] lg:w-[90%] h-[90%] w-[50%] flex items-center justify-center text-3xl text-[#c8d5e5] dark:text-[#b4b4b4]">
          TASK NO.1
        </div>
        <button className="lg:h-[15%] lg:w-[90%] h-[50%] w-[20%] bg-[#c8d5e5] dark:bg-[#2b3439] dark:text-[#b4b4b4] dark:border-1 dark:border[#b4b4b4] rounded-4xl text-[#2b3439] flex items-center justify-evenly text-2xl cursor-pointer dark:shadow-xs shadow-[black]">
          <p className="md:block hidden">SEE MORE</p>
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Main;
