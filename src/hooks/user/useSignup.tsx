import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '@/types/user';
import usePopup from '../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';
import { ServerResponse } from '@/types';

function useSignupMutation() {
  const { openPopup, closePopup } = usePopup();
  const navigate = useNavigate();
  const mutationFn = async (reqData: SignUpForm) => {
    const { data } = await axios.post('/member/signUp', reqData);
    return data;
  };

  const onSuccess = ({ type, message }: ServerResponse) => {
    let content: string;
    let subContent: string;
    let onClick = () => {
      closePopup();
      navigate('/login');
    };

    switch (type) {
      case 'SUCCESS':
        content = '회원가입이 완료되었습니다.';
        subContent = '로그인을 진행해주세요.';
        break;
      case 'FAIL':
        content = '회원가입에 실패했습니다.';
        subContent = message;
        onClick = () => closePopup();
        break;
      case 'ERROR':
        content = '회원가입중 에러가 발생했습니다.';
        subContent = message;
        onClick = () => closePopup();
        break;
      default:
        content = '알 수 없는 에러가 발생했습니다.';
        subContent = message;
        onClick = () => closePopup();
    }
    openPopup(
      <Popup
        content={content}
        subContent={subContent}
        buttons={
          <Button variant="popup-point" onClick={onClick}>
            확인
          </Button>
        }
      />,
    );
  };

  const onError = (error: Error) => {
    openPopup(
      <Popup content="회원가입이 실패했습니다." subContent={error.message} />,
    );
  };
  return useMutation({ mutationFn, onSuccess, onError });
}

export default useSignupMutation;
