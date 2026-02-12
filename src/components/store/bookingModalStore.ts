import { create } from "zustand";

interface BookingModalState {
  isOpen: boolean;
  selectedService: string | null;
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
}

export const useBookingModalStore = create<BookingModalState>((set) => ({
  isOpen: false,
  selectedService: null,
  openModal: (serviceName?: string) => set({ isOpen: true, selectedService: serviceName || null }),
  closeModal: () => set({ isOpen: false, selectedService: null }),
}));
