import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { SignUpForm } from '@/types/user';

function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpForm>();

  const nicknameRegister = register('name', {
    required: '※ 이름을 입력해 주세요.',
    minLength: {
      value: 3,
      message: '※ 이름은 최소 3글자 이상이어야 합니다.',
    },
    maxLength: {
      value: 16,
      message: '※ 이름은 최대 16글자까지만 허용됩니다.',
    },
  });
  return (
    <Input
      label="이름"
      type="name"
      id="signUp_name"
      placeholder="김루트"
      className="h-[58px]"
      errorMessage={errors.name?.message}
      {...nicknameRegister}
    />
  );
}

export default NameInput;
