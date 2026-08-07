import { create } from "zustand";

export const useThemeStore = create((set) => ({
  Darkmode: true,
  toggleTheme: () =>
    set((state) => ({
      Darkmode: !state.Darkmode,
    })),
}));

export const useTaskStore = create((set) => ({
  tasks: [],
  isAddOpen: false,
  selectedTask: null,
  title: "",
  Description: "",

  setTitle: (title) => set({ title }),
  setDescription: (Description) => set({ Description }),
  setIsAddOpen: (isOpen) => set({ isAddOpen: isOpen }),
  setSelectedTask: (task) => set({ selectedTask: task }),
  deleteTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),

  addTask: (title, Description) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), title, Description }],
      isAddOpen: false,
    })),
}));
