export interface ProfileUpdateForm {
  memberId: number;
  profile: string;
  name: string;
  nickname: string;
  email: string;
  prePassword: string;
  newPassword: string;
}

export interface SignUpForm {
  name: string;
  nickname: string;
  email: string;
  password: string;
  username: string;
  isChecked: boolean;
}

export interface LoginResponse {
  memberId: number | null;
  profile: string | null;
  socialId: string | null;
  name: string | null;
  nickname: string | null;
  email: string | null;
  socialType: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface PropfileResponse {
  email: string;
  memberId: number;
  name: string;
  newPassword: string | null;
  nickname: string;
  prePassword: string | null;
  profile: string;
}
