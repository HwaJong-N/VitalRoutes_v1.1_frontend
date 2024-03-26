import { useFormContext } from 'react-hook-form';
import { useId } from 'react';
import { SignUpForm } from '@/types/user';

function CheckboxInput() {
  const { register } = useFormContext<SignUpForm>();
  const checkboxId = useId();

  return (
    <label htmlFor={checkboxId} className="flex items-center gap-[8px]">
      <input
        type="checkbox"
        id={checkboxId}
        className="h-[16px] w-[16px]"
        {...register('isChecked', {
          required: '※ 약관에 동의하셔야 회원가입이 가능합니다.',
        })}
      />
      Vitalroutes의 서비스 약관개인정보 보호정책 및 위치기반 서비스에
      동의합니다.
    </label>
  );
}

export default CheckboxInput;
