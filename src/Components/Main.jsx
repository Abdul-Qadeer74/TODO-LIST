import React, { useEffect } from "react";
import { X, MoveRight } from "lucide-react";
import { useThemeStore, useTaskStore } from "./Store";

const Main = () => {
  const { Darkmode, toggleTheme } = useThemeStore();

  const {
    tasks,
    isAddOpen,
    setIsAddOpen,
    selectedTask,
    setSelectedTask,
    addTask,
    title,
    setTitle,
    Description,
    setDescription,
    deleteTask,
  } = useTaskStore();

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(tasks));
  }, [tasks]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title, Description);
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", Darkmode);
  }, [Darkmode]);

  function delNote(index) {
    deleteTask(index);
  }

  return (
    <div className="h-[90%] w-[98%] bg-[#c8d5e5] rounded-4xl flex   p-2 dark:bg-[#2b3439] transition-colors duration-300 border-1 border-[#b4b4b4] shadow-xl shadow-[black]    ">
      {tasks.length === 0 ? (
        <p className="h-full w-full flex items-center justify-center text-4xl dark:text-[#b4b4b4] text-[#2b3439]">
          No Tasks Added Yet.
        </p>
      ) : (
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col items-center h-full w-full overflow-x-auto gap-2 [&::-webkit-scrollbar]:hidden rounded-4xl ">
          {tasks.map((tasks, index) => (
            <div
              key={index}
              className="h-[80%] xs:h-[70%] lg:w-[25%] w-[90%] transition-colors duration-300  dark:bg-[#2b3439] bg-[#c8d5e5] rounded-4xl flex items-start flex-col dark:shadow-xl shadow-[black] border-1 dark:border-[#b4b4b4]  p-4 overflow-hidden shrink-0"
            >
              <div
                key={index}
                className="lg:h-[8%] h-[6%] w-[10%]  rounded-4xl bg-[#c8d5e5] dark:bg-[#2b3439] transition-colors duration-300 dark:text-white text-[#2b3439] flex items-center justify-center cursor-pointer dark:border-[#b4b4b4] border-1 border-[#2b3439] "
              >
                {index + 1}
              </div>
              <div className="h-[77%] w-full">
                <h3 className="text-3xl dark:text-[#c8d5e5] h-[20%] overflow-hidden ">
                  {tasks.title}
                </h3>
                <p className="text-xl dark:text-[#c8d5e5] h-[80%] overflow-hidden ">
                  {tasks.Description}
                </p>
              </div>
              <button
                onClick={() => {
                  delNote(index);
                }}
                className="h-[15%] w-full  text-white bg-red-500 dark:bg-black dark:text-[#b4b4b4] dark:border-1 dark:border-[#b4b4b4] rounded-4xl  flex items-center justify-evenly text-2xl cursor-pointer dark:shadow-xs shadow-[black] "
              >
                <p>DELETE</p>
                <X />
              </button>
            </div>
          ))}
        </div>
      )}
      {isAddOpen && (
        <div className="h-[65%] w-[90%] border-1 dark:border-[#b4b4b4] dark:bg-[#2b3439] transition-colors duration-300 bg-[#C8D5E5] rounded-4xl flex items-center justify-center fixed  ">
          <div className="h-full w-full flex  flex-col">
            <h2 className="w-full h-[15%] text-2xl  flex items-center justify-center  dark:text-[#b4b4b4] text-[#2b3439]">
              Add New Task
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="h-[80%] w-full flex items-center justify-evenly flex-col"
            >
              <input
                type="text"
                placeholder="Task Heading"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="h-[20%] w-[90%] border-1 dark:border-[#b4b4b4] dark:text-[#b4b4b4] flex items-center p-2 text-[#2b3439]"
              />
              <textarea
                placeholder="Task Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="h-[40%] w-[90%] border-1 dark:border-[#b4b4b4] dark:text-[#b4b4b4] flex items-center p-2 text-[#2b3439]"
              />
              <div className="h-[20%] w-[90%]  flex items-center justify-evenly">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="h-[90%] w-[45%] border-1 border-[#b4b4b4] text-red-500 rounded-4xl shadow-xl shadow-[black]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-[90%] w-[45%] border-1 border-[#b4b4b4] dark:text-[#b4b4b4] text-[#2b3439] rounded-4xl shadow-xl shadow-[black] "
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
