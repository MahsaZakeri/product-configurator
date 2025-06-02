import { create } from 'zustand';
import type { DesignState } from "../models/DesignState";
import { ProductSize } from "../models/ProductSize";

export const useDesignStore = create<DesignState>((set) => ({
  color: "#ffffff",
  text: "",
  image: null,
  size: ProductSize.M,
  setColor: (color) => set({ color }),
  setText: (text) => set({ text }),
  setImage: (image) => set({ image }),
  setSize: (size) => set({ size }),
  resetDesign: () => set({ color: "#ffffff", text: "", image: null, size: ProductSize.M }),
}));