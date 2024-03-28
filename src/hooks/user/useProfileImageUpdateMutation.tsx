import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProfileImageUpdateForm } from '@/types/user';
import usePopup from '../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';
import { ServerResponse } from '@/types';

function useProfileUpdateMutation() {
  const { openPopup, closePopup } = usePopup();
  const navigate = useNavigate();

  const mutationFn = async ({
                              profileImage
                            }: ProfileImageUpdateForm) => {
    const formData = new FormData();
    formData.append('profileImage', profileImage);
    const response = await axios.post(`/member/profile/image`, formData);
    return response.data as ServerResponse;
  };

  const onSuccess = (data: ServerResponse) => {
    openPopup(
      <Popup
        content={data.message}
        subContent=""
        buttons={
          <Button
            variant="popup-point"
            onClick={() => {
              closePopup();
              navigate('/profile');
            }}
          >
            확인
          </Button>
        }
      />,
    );
  };

  const onError = () => {};

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useProfileUpdateMutation;
