import create from "zustand";

interface Menu {
  visible: boolean;
  setVisbile: (visible: boolean) => void;
}

export const useMenuStore = create<Menu>((set, get) => ({
  visible: false,
  setVisbile: (visible: boolean) => {
    set({ visible });
  },
}));
