import { useLocation, useNavigate } from 'react-router-dom';
import { getImageUrl } from '@/utils/getImageUrl.ts';
import Input from '@/components/common/Input.tsx';
import Button from '@/components/common/Button.tsx';
import usePopup from '@/hooks/usePopup.ts';
import { useForm } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';
import { ServerResponse } from '@/types';
import Popup from '@/components/common/Popup.tsx';

interface PasswordForm {
  password: string;
}

function PasswordReset() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArray = location.pathname.split('/'); // URL 경로를 '/'로 분할하여 배열로 만듭니다.
  const token = pathArray[3]; // xxxxx 부분을 추출합니다.

  const { openPopup, closePopup } = usePopup();
  const methods = useForm<PasswordForm>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const moveLogin = () => {
    closePopup();
    navigate('/login');
  }

  const onSubmit = async (data: PasswordForm) => {
    const response: AxiosResponse<ServerResponse> = await axios.patch(`/member/password/${token}`, { password: data.password });
    const serverResponse: ServerResponse = response.data;
    openPopup(
      <Popup
        content={serverResponse.message}
        subContent=""
        buttons={
          <Button variant="popup" onClick={moveLogin}>
            확인
          </Button>
        }
      />
    );
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="hidden h-screen w-1/3 xl:flex">
          <img
            src={getImageUrl('login/login_img.jpg')}
            alt="login_img"
            className="h-full w-full object-cover"
          />
        </div>
        <form
          className="mx-auto w-3/4 space-y-8 sm:w-[580px] xl:w-[580px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-xl font-bold leading-8 text-gray-1">
            새로운 비밀번호를 입력해주세요
          </span>
          <p className="font-base font-normal leading-6 text-gray-1">
            비밀번호는 대문자, 소문자, 숫자를 포함한 8~20자리입니다.
          </p>
          <Input
            label="새로운 비밀번호"
            type="password"
            id="password"
            {...register('password', {
              required: '※ 비밀번호 입력란이 비어있습니다.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/,
                message: '※ 올바른 비밀번호 형식에 맞게 작성해주세요.',
              },
            })}
            errorMessage={errors.password?.message}
          />
          <Button variant="secondary-a" type="submit">
            비밀번호 변경
          </Button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;