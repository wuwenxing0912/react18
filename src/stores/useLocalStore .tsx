import create from "zustand";

interface BearState {
  hasReadWelcomes: boolean;
  setReadWelcomes: (read: boolean) => void;
}
const init = localStorage.getItem("hasReadWelcomes");

export const useLocalStore = create<BearState>((set) => ({
  hasReadWelcomes: init === "yes",
  setReadWelcomes: (read: boolean) => {
    const result = read ? "yes" : "no";
    localStorage.setItem("hasReadWelcomes", result);
    set({ hasReadWelcomes: read });
  },
}));
