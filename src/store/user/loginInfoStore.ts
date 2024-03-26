import { create } from 'zustand';
import { LoginResponse } from '@/types/user';

interface LoginState extends LoginResponse {
  isLogin: boolean;
  setLoginInfo: (data: LoginResponse) => void;
  setIsLogin: (isLogin: boolean) => void;
  logout: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLogin: false,

  memberId: null,
  profile: null,
  socialId: null,
  name: null,
  nickname: null,
  email: null,
  socialType: null,
  accessToken: null,
  refreshToken: null,

  setLoginInfo: (data: LoginResponse) => set({ ...data }),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  logout: () =>
    set({
      isLogin: false,
      memberId: null,
      profile: null,
      socialId: null,
      name: null,
      nickname: null,
      email: null,
      socialType: null,
      accessToken: null,
      refreshToken: null,
    }),
}));
