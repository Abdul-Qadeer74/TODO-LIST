import { create } from "zustand";


export const useThemeStore = create((set)=>({
    Darkmode: false,
    toggleTheme:()=>
        set((state)=>({
            Darkmode: !state.Darkmode,
        })),

}));