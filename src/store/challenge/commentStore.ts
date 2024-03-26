import { StoreApi, UseBoundStore, create } from 'zustand';

type Mode = 'modify' | 'view';

interface CommentModeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const commentModeStoreCache = new Map<
  number,
  UseBoundStore<StoreApi<CommentModeStore>>
>();

export const storeFamilyCommentMode = (id: number) => {
  let store = commentModeStoreCache.get(id);
  if (!store) {
    store = create<CommentModeStore>((set) => ({
      mode: 'view',
      setMode: (mode) => set({ mode }),
    }));
    commentModeStoreCache.set(id, store);
  }
  return store;
};
