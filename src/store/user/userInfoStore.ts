import { create } from 'zustand';

interface UserInfoType {
  name: string;
  nickName: string;
  email: string;
  password: string;
  username: string;
  agree: boolean;
}

interface UserStore {
  userValues: UserInfoType;
  setuserValues: (values: Partial<UserInfoType>) => void; // 필요한 속성만 업데이트 하기 위해 Partial사용
}

const initialState: UserInfoType = {
  name: '',
  nickName: '',
  email: '',
  password: '',
  username: '',
  agree: false,
};

export const userInfoStore = create<UserStore>((set) => ({
  userValues: initialState,
  setuserValues: (values) =>
    set((state) => ({ userValues: { ...state.userValues, ...values } })),
}));
