import { StoreApi, UseBoundStore, create } from 'zustand';

type Mode = 'modify' | 'view';

interface ReplyModeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const replyModeStoreCache = new Map<
  number,
  UseBoundStore<StoreApi<ReplyModeStore>>
>();

export const storeFamilyReplyMode = (id: number) => {
  let store = replyModeStoreCache.get(id);
  if (!store) {
    store = create<ReplyModeStore>((set) => ({
      mode: 'view',
      setMode: (mode) => set({ mode }),
    }));
    replyModeStoreCache.set(id, store);
  }
  return store;
};
