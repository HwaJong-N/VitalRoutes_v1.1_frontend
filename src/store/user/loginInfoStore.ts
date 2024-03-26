import { create } from 'zustand';
import { LoginResponse } from '@/types/user';

interface LoginState extends LoginResponse {
  isLogin: boolean;
  setLoginInfo: (data: LoginResponse) => void;
  setIsLogin: (isLogin: boolean) => void;
  logout: () => void;
}

const localStorageKey = 'loginInfo';

export const useLoginStore = create<LoginState>((set) => {
  // 로컬 스토리지에서 로그인 정보 불러오기
  const storedLoginInfo = localStorage.getItem(localStorageKey);
  const initialLoginState: LoginState = storedLoginInfo
    ? { ...JSON.parse(storedLoginInfo), isLogin: true }
    : {
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
    };

  return {
    ...initialLoginState,

    // 로그인 정보 저장 및 로컬 스토리지에 저장하기
    setLoginInfo: (data: LoginResponse) => {
      set(data);
      localStorage.setItem(localStorageKey, JSON.stringify(data));
    },

    // 로그인 상태 설정 및 로컬 스토리지에 저장하기
    setIsLogin: (isLogin: boolean) => {
      set({ isLogin });
      const storedLoginInfo = localStorage.getItem(localStorageKey);
      if (storedLoginInfo) {
        const loginInfo = JSON.parse(storedLoginInfo);
        localStorage.setItem(
          localStorageKey,
          JSON.stringify({ ...loginInfo, isLogin }),
        );
      }
    },

    // 로그아웃 처리 및 로컬 스토리지에서 로그인 정보 삭제하기
    logout: () => {
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
      });
      localStorage.removeItem(localStorageKey);
    },
  };
});
