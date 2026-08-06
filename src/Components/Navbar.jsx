import React, { useEffect } from "react";
import { Sun, Plus, Moon } from "lucide-react";
import { useThemeStore } from "./Store";

const Navbar = () => {
  const { Darkmode, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", Darkmode);
  }, [Darkmode]);

  return (
    <div className="h-[10%] w-[98%] bg-[#c8d5e5] dark:bg-[#2b3439] flex items-center justify-between rounded-4xl px-2 dark:shadow-xl shadow-[black] dark:border-1 dark:border-[#b4b4b4] transition-colors duration-300">
      <div className="w-[45%] h-full text-[#2b3439] flex items-center text-2xl dark:text-[#b4b4b4]  ">
        <h1>TODO LIST</h1>
      </div>
      <div className="w-[45%] h-full text-[#c8d5e5] dark:text-[#b4b4b4] flex items-center justify-evenly ">
        <button className="w-[40%] h-[90%] bg-[#2b3439] rounded-4xl p-1 flex items-center justify-evenly  dark:border-1 dark:border-[#b4b4b4]">
          <p className="lg:block hidden">ADD NEW TASK</p>
          <Plus />
        </button>
        <button
          className="w-[40%]  h-[90%] bg-[#2b3439] rounded-4xl p-1 flex items-center justify-evenly  dark:border-1 dark:border-[#b4b4b4]"
          onClick={toggleTheme}
        >
          <p className="lg:block hidden">
            {Darkmode ? "Lightmode" : "Darkmode"}
          </p>
          {Darkmode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
