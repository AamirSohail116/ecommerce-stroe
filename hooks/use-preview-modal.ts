import { create } from "zustand";

import { product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: product;
  onOpen: (data: product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
