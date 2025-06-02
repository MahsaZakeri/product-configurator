import type { ProductSize } from "./ProductSize";

export type DesignState = {
  color: string;
  text: string;
  image: File | null;
  size: ProductSize;
  setColor: (color: string) => void;
  setText: (text: string) => void;
  setImage: (image: File | null) => void;
  setSize: (size: ProductSize) => void;
  resetDesign: () => void;
};
