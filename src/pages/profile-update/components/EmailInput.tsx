import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { ProfileUpdateForm } from '@/types/user';

function EmailInput() {
  const { register } = useFormContext<ProfileUpdateForm>();

  const emailRegister = register('email');

  return (
    <Input
      type="email"
      label="이메일"
      placeholder="example@vitalroutes.com"
      {...emailRegister}
    />
  );
}

export default EmailInput;
