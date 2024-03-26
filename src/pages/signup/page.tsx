import { FormProvider, useForm } from 'react-hook-form';
import { userInfoStore } from '../../store/user/userInfoStore';
import Button from '@/components/common/Button';
import { getImageUrl } from '@/utils/getImageUrl';
import { useNicknameValidStore } from '@/store/user/signupStore';
import { SignUpForm } from '@/types/user';
import NicknameInput from './components/NicknameInput';
import NameInput from './components/NameInput';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import useSignupMutation from '@/hooks/user/useSignup';
import CheckboxInput from './components/CheckboxInput';

function SignUp() {
  const methods = useForm<SignUpForm>();
  const { handleSubmit } = methods;
  const setUserValues = userInfoStore((state) => state.setuserValues);
  const { isValid: nicknameValidation } = useNicknameValidStore();
  const { mutate, isPending } = useSignupMutation();

  const onSubmit = async (data: SignUpForm) => {
    if (!nicknameValidation) {
      return;
    }
    setUserValues(data);
    mutate(data);
  };

  return (
    <div>
      <div className="flex items-center  justify-center xl:ml-[432px]">
        <img
          src={getImageUrl('login/login_img.jpg')}
          alt="login_img"
          className="fixed left-0 top-0 hidden h-screen xl:block"
        />
        <FormProvider {...methods}>
          <form
            className="mx-auto w-3/4 space-y-8 py-[120px] sm:w-[580px] xl:w-[580px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="text-xl font-bold leading-8 text-gray-1">
              Vitalroutes에 가입하세요.
            </span>
            <NameInput />
            <NicknameInput />
            <EmailInput />
            <PasswordInput />
            <CheckboxInput />
            <div className="relative flex items-center">
              {/* footer 완성시 변경예정 */}
              {/* <p className="absolute top-[21px] ml-6 text-[15px] tracking-tight">
              Vitalroutes의 <Link to="#" className="underline">서비스 약관</Link>,{" "}
              <Link to="#" className="underline">개인정보 보호정책</Link> 및{" "}
              <Link to="#" className="underline">위치기반 서비스</Link>에 동의합니다.
            </p> */}
            </div>

            <Button variant="secondary-a" type="submit" disabled={isPending}>
              계정 만들기
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default SignUp;
