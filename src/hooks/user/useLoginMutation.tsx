import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from '@/types/user';
import { useLoginStore } from '@/store/user/loginInfoStore';
import Popup from '@/components/common/Popup';
import usePopup from '../usePopup';
import Button from '@/components/common/Button';

function useLoginMutation() {
  const navigate = useNavigate();
  const { setLoginInfo, setIsLogin } = useLoginStore();
  const { openPopup, closePopup } = usePopup();

  const mutationFn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    return axios.postForm('/member/login', formData);
  };

  const onSuccess = ({ data }: AxiosResponse<{ data: LoginResponse }>) => {
    navigate('/');
    setLoginInfo(data.data);
    setIsLogin(true);
  };

  const throwOnError = (error: Error) => {
    if (
      isAxiosError(error) &&
      error.response?.status &&
      error.response?.status >= 500
    ) {
      return true;
    }

    return false;
  };

  const onError = (error: AxiosError<{ message: string }>) => {
    if (isAxiosError(error))
      openPopup(
        <Popup
          content="로그인 실패했습니다."
          subContent={error.response?.data.message}
          buttons={
            <Button variant="popup-point" onClick={closePopup}>
              확인
            </Button>
          }
        />,
      );
  };

  return useMutation({ mutationFn, onSuccess, onError, throwOnError });
}

export default useLoginMutation;
