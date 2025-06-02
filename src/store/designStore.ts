import { create } from 'zustand';

type DesignState = {
  color: string;
  text: string;
  image: File | null;
  setColor: (color: string) => void;
  setText: (text: string) => void;
  setImage: (image: File | null) => void;
  resetDesign: () => void;
};

export const useDesignStore = create<DesignState>((set) => ({
  color: '#ffffff',
  text: '',
  image: null,
  setColor: (color) => set({ color }),
  setText: (text) => set({ text }),
  setImage: (image) => set({ image }),
  resetDesign: () => set({ color: '#ffffff', text: '', image: null }),
}));