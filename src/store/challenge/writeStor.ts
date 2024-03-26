import { create } from 'zustand';

interface GpsNotfoundNoticeState {
  isNoticed: boolean;
  setIsNoticed: (isNoticed: boolean) => void;
}

export const useGpsNotfoundNoticeStore = create<GpsNotfoundNoticeState>(
  (set) => ({
    isNoticed: false,
    setIsNoticed: (isNoticed) => set({ isNoticed }),
  }),
);
