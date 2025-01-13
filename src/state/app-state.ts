import { create } from "zustand";

type AppStateT = {
  fontStyle: string;
  setFontStyle: (fontStyle: string) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const useAppState = create<AppStateT>()((set) => {
  return {
    fontStyle: "inter",
    setFontStyle: (fontStyle) => set({ fontStyle }),
    theme: "light",
    setTheme: (theme) => set({ theme }),
  };
});
