import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { SignUpForm } from '@/types/user';
import REGEXP from '@/constants/regexp';

function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpForm>();

  const passwordRegister = register('password', {
    required: '※ 비밀번호 입력란이 비어있습니다.',
    pattern: {
      value: REGEXP.password,
      message: '※ 올바른 비밀번호 형식에 맞게 작성해주세요.',
    },
  });

  return (
    <div className="flex flex-col gap-[16px]">
      <Input
        label="비밀번호"
        type="password"
        autoComplete="off"
        id="signUp_password"
        placeholder="비밀번호 8~16자리를 입력해주세요"
        className="h-[58px]"
        {...passwordRegister}
        errorMessage={errors.password?.message}
      />
      <span className="text-[13px] tracking-tight text-gray-2">
        비밀번호는 8~16자리이며, 대문자, 소문자, 숫자 중 최소 2종류를
        포함해야합니다.
      </span>
    </div>
  );
}

export default NameInput;
