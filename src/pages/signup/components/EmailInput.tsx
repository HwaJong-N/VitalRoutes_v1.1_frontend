import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { SignUpForm } from '@/types/user';

function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpForm>();

  const emailRegister = register('email', {
    required: '※ 이메일 입력란이 비어있습니다.',
  });

  return (
    <Input
      label="이메일"
      type="email"
      id="signUp_email"
      placeholder="example@vitalroutes.com"
      className="h-[58px]"
      {...emailRegister}
      errorMessage={errors.email?.message}
    />
  );
}

export default EmailInput;
