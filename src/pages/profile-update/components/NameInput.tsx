import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { ProfileUpdateForm } from '@/types/user';

function NameInput() {
  const { register } = useFormContext<ProfileUpdateForm>();
  const nameRegister = register('name');

  return <Input placeholder="김이름" label="이름" {...nameRegister} />;
}

export default NameInput;
