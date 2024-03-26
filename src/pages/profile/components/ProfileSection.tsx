import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import useProfile from '@/hooks/user/useProfile';

function ProfileSection() {
  const { data } = useProfile();

  return (
    <div className=" flex flex-col items-center justify-center gap-4  pb-[84px] pt-[146px] xl:flex-row xl:gap-[52px] xl:pb-[120px] xl:pt-[256px]">
      <img
        className="h-[92px] w-[92px] rounded-full bg-gray-200 xl:h-[204px] xl:w-[204px]"
        src={data?.profile}
        alt="profile"
      />
      <div className="flex flex-col items-center justify-center gap-2 xl:items-start ">
        <div className=" font-bold leading-[120%] xl:text-[32px]">
          {data?.name}
        </div>
        <div className=" text-sm leading-[160%] xl:text-[24px]">
          {data?.nickname}
        </div>
        <Link to="/profile/update">
          <Button className="xl:mt-[38px]" variant="third-d">
            프로필 수정
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSection;
