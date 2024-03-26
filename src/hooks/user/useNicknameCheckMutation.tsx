import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNicknameValidStore } from '@/store/user/signupStore';
import usePopup from '../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

function useNicknameCheckMutation() {
  const { setIsValid } = useNicknameValidStore();
  const { openPopup, closePopup } = usePopup();
  const mutationFn = (data: { nickname: string }) =>
    axios.post('/member/duplicateCheck', data);

  const onSuccess = () => {
    setIsValid(true);
    openPopup(
      <Popup
        content="닉네임 인증이 완료되었습니다."
        subContent="회원가입을 계속 진행해주세요."
        buttons={
          <Button variant="popup" onClick={closePopup}>
            확인
          </Button>
        }
      />,
    );
  };

  const onError = (error: Error) => {
    setIsValid(false);
    openPopup(
      <Popup
        content="닉네임을 사용할 수 없습니다."
        subContent={error.message}
        buttons={
          <Button variant="popup" onClick={closePopup}>
            확인
          </Button>
        }
      />,
    );
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useNicknameCheckMutation;
