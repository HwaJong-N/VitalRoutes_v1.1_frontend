import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { getImageUrl } from '@/utils/getImageUrl';

interface FormValues {
  username: string;
  name: string;
  email: string;
}

function FindPw() {
  const methods = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = () => {};
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="hidden h-screen w-1/3 xl:flex">
          <img
            src={getImageUrl('login/login_img.jpg')}
            alt="login_img"
            className="h-full w-full object-cover"
          />
        </div>
        <form
          className="mx-auto w-3/4 space-y-8 sm:w-[580px] xl:w-[580px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-xl font-bold leading-8 text-gray-1">
            비밀번호를 잊으셨나요?
          </span>
          <p className="font-base font-normal leading-6 text-gray-1">
            가입 시 사용한 이메일 주소를 입력하시면
            <br /> 비밀번호 재설정 안내를 보내드립니다.
          </p>
          <Input
            label="이메일"
            type="email"
            id="email"
            placeholder="example@gmail.com"
            {...register('email', {
              required: '빈칸이면 안됨',
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '패턴에 맞게 입력',
              },
            })}
            errorMessage={errors.email?.message}
          />

          <Button variant="secondary-a" type="submit">
            재설정 이메일 보내기
          </Button>
          <Link
            to="/login"
            className="flex justify-center text-[14px] text-gray-2 underline"
          >
            로그인 페이지로 이동
          </Link>
        </form>
      </div>
    </div>
  );
}

export default FindPw;
