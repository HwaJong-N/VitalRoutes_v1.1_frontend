import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userInfoStore } from '../../store/user/userInfoStore';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { getImageUrl } from '@/utils/getImageUrl';
import Modal from './components/Modal';
import { API_URL } from '@/constants/api';
import useLoginMutation from '@/hooks/user/useLoginMutation';
import REGEXP from '@/constants/regexp';

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();
  const [socialLoginModalOpen, setSocialLoginModalOpen] =
    useState<boolean>(false);
  const setUserValues = userInfoStore((state) => state.setuserValues);
  const { mutate } = useLoginMutation();

  const socialLoginToggle = () => {
    setSocialLoginModalOpen(!socialLoginModalOpen);
  };

  const onSubmit = (data: LoginForm) => {
    setUserValues(data);
    mutate(data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden h-screen w-1/3 xl:flex">
        <img
          src={getImageUrl('login/login_img.jpg')}
          alt="login_img"
          className="h-full w-full object-cover"
        />
      </div>

      <form
        className="mx-auto w-3/4 space-y-8 sm:w-[580px] sm:space-y-12 xl:w-[580px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-xl font-bold leading-8 text-gray-1">
          <Link to="/">Vitalroutes</Link>에 로그인
        </span>

        <Button
          className="border-2"
          variant="secondary-b"
          onClick={socialLoginToggle}
          type="button"
        >
          소셜 로그인
        </Button>
        <Modal
          isOpen={socialLoginModalOpen}
          onClose={socialLoginToggle}
          title="소셜로그인"
        >
          <a href={`${API_URL}/login/kakaoLogin`}>
            <img
              src={getImageUrl('login/kakao_login_medium_wide.png')}
              alt="kakaoLogin"
            />
          </a>
        </Modal>

        <div>
          <Input
            label="이메일"
            type="email"
            id="login_email"
            placeholder="example@vitalroutes.com"
            className="h-[58px]"
            {...register('email', {
              required: '※ 이메일 입력란이 비어있습니다.',
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '※ 올바른 이메일 형식에 맞게 작성해주세요.',
              },
            })}
            errorMessage={errors.email?.message}
          />
        </div>

        <div className="relative">
          <Input
            label="비밀번호"
            type="password"
            autoComplete="off"
            id="login_password"
            placeholder="비밀번호 8~16자리를 입력해주세요"
            className="h-[58px] w-full"
            {...register('password', {
              required: '※ 비밀번호 입력란이 비어있습니다.',
              pattern: {
                value: REGEXP.password,
                message: '※ 올바른 비밀번호 형식에 맞게 작성해주세요.',
              },
            })}
            errorMessage={errors.password?.message}
          />
          <Link
            to="findPassword"
            className="absolute right-0 top-0 mt-2 text-right text-gray-2 underline"
          >
            forget?
          </Link>
        </div>
        <span className="text-[13px] text-gray-2">
          비밀번호는 8~16자리이며, 대문자, 소문자, 숫자 중 최소 2종류를 포함해야
          합니다.
        </span>

        <Button variant="secondary-a" type="submit" disabled={isSubmitting}>
          로그인
        </Button>

        <div className="flex items-center justify-center">
          <span className="text-[14px] text-gray-2">계정이 없으신가요?</span>
          <Link
            to="signUp"
            className="ml-[16px] text-[14px] text-gray-2 underline"
          >
            가입하기
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
