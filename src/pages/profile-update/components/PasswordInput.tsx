import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { ProfileUpdateForm } from '@/types/user';
import REGEXP from '@/constants/regexp';

function PasswordInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileUpdateForm>();

  const prePasswordRegister = register('prePassword', {
    required: '※ 비밀번호 입력란이 비어있습니다.',
    pattern: {
      value: REGEXP.password,
      message: '※ 올바른 비밀번호 형식에 맞게 작성해주세요.',
    },
  });
  const newPasswordRegister = register('newPassword', {
    required: '※ 비밀번호 입력란이 비어있습니다.',
    pattern: {
      value: REGEXP.password,
      message: '※ 올바른 비밀번호 형식에 맞게 작성해주세요.',
    },
  });

  return (
    <>
      <Input
        type="password"
        label="이전 비밀번호"
        autoComplete="off"
        placeholder="비밀번호를 입력해주세요."
        errorMessage={errors.newPassword?.message}
        {...prePasswordRegister}
      />
      <div>
        <Input
          type="password"
          autoComplete="off"
          label="새 비밀번호"
          placeholder="비밀번호를 입력해주세요."
          errorMessage={errors.newPassword?.message}
          {...newPasswordRegister}
        />
        <div className="mt-[16px] text-[13px] text-gray-2">
          비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자 전부 포함해야
          합니다.
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
