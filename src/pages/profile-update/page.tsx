import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import PasswordInput from './components/PasswordInput';
import NameInput from './components/NameInput';
import NicknameInput from './components/NicknameInput';
import EmailInput from './components/EmailInput';
import ProfileImageInput from './components/ProfileImageInput';
import useProfile from '@/hooks/user/useProfile';
import { ProfileUpdateForm } from '@/types/user';
import useProfileUpdateMutation from '@/hooks/user/useProfileUpdateMutation';

function ProfileUpdatePage() {
  const { data } = useProfile();
  const methods = useForm<ProfileUpdateForm>({
    defaultValues: {
      name: data?.name || '',
      memberId: data?.memberId || 0,
      profile: data?.profile || '',
      nickname: data?.nickname || '',
      email: data?.email || '',
      prePassword: data?.prePassword || '',
      newPassword: data?.newPassword || '',
    },
  });
  const { handleSubmit } = methods;
  const { mutate, isPending } = useProfileUpdateMutation();

  const onValid: SubmitHandler<ProfileUpdateForm> = (formData) => {
    mutate(formData);
  };

  return (
    <div className="mt-[136px] px-[21px]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onValid)}
          className="mx-auto flex max-w-[600px] flex-col items-center gap-[62px] py-[120px]"
        >
          <ProfileImageInput />
          <div className="flex w-full flex-col gap-[32px]">
            <NameInput />
            <NicknameInput />
            <EmailInput />
            <PasswordInput />
          </div>
          <div className="flex w-full flex-col items-end gap-[16px]">
            <Button disabled={isPending} type="submit">
              수정하기
            </Button>
            <button type="button">탈퇴하기</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default ProfileUpdatePage;
