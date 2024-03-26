import { create } from 'zustand';

interface FilterState {
  filter: string;
  setFilter: (filter: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: 'myChallenge',
  setFilter: (filter) => set({ filter }),
}));
