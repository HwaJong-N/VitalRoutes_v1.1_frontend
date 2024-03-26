import { create } from 'zustand';

interface NicknameValidState {
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
}

export const useNicknameValidStore = create<NicknameValidState>((set) => ({
  isValid: false,
  setIsValid: (isValid) => set({ isValid }),
}));
