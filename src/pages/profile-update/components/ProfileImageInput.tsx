import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ProfileImageUpdateForm, ProfileUpdateForm } from '@/types/user';
import useProfileImageUpdateMutation from '@/hooks/user/useProfileImageUpdateMutation.tsx';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';
import usePopup from '@/hooks/usePopup.ts';

function ProfileImageInput() {
  const { register, watch } = useFormContext<ProfileUpdateForm>();
  const profileImageRegister = register('profile');
  const { mutate } = useProfileImageUpdateMutation();
  const { openPopup, closePopup } = usePopup();

  const onSubmit = (selectedFile: File) => {
    const newProfileImage: ProfileImageUpdateForm = {
      profileImage: selectedFile,
    };
    mutate(newProfileImage); // 이미지 업데이트 호출
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      openPopup(
        <Popup
          content="사진을 업로드하시겠습니까?"
          subContent=""
          buttons={
            <>
              <Button variant="popup" onClick={() => onSubmit(selectedFile)}>
                확인
              </Button>
              <Button variant="popup" onClick={closePopup}>
                취소
              </Button>
            </>
          }
        />
      );
    }
  };

  return (
    <label
      className="overflow-hidden rounded-full bg-gray-8 object-cover"
      htmlFor="profile"
    >
      <img
        className="h-[142px] w-[142px]"
        src={watch('profile')}
        alt="profile"
      />
      <input
        id="profile"
        type="file"
        hidden
        {...profileImageRegister}
        onChange={handleImageChange}
      />
    </label>
  );
}

export default ProfileImageInput;
