import { useFormContext } from 'react-hook-form';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import useNicknameCheckMutation from '@/hooks/user/useNicknameCheckMutation';
import { SignUpForm } from '@/types/user';
import REGEXP from '@/constants/regexp';

function NicknameInput() {
  const { mutate } = useNicknameCheckMutation();
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<SignUpForm>();

  const checkNicknameValidation = () => {
    const { nickname } = getValues();
    mutate({ nickname });
  };

  const nicknameRegister = register('nickname', {
    required: '※ 닉네임을 입력해주세요.',
    minLength: {
      value: 3,
      message: '※ 닉네임은 최소 3글자 이상이어야 합니다.',
    },
    maxLength: {
      value: 16,
      message: '※ 닉네임은 최대 16글자까지만 허용됩니다.',
    },
    pattern: {
      value: REGEXP.nickname,
      message: '특수문자 없이 최소 3자에서 최대 16자까지 입력 가능합니다.',
    },
  });

  return (
    <Input
      label="닉네임"
      type="nickname"
      id="signUp_nickname"
      placeholder="닉네임을 입력해 주세요."
      className="h-[58px]"
      button={
        <Button variant="tag-b" type="button" onClick={checkNicknameValidation}>
          중복 인증
        </Button>
      }
      {...nicknameRegister}
      errorMessage={errors.nickname?.message}
    />
  );
}

export default NicknameInput;
