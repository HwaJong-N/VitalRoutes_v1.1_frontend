import { getImageUrl } from '@/utils/getImageUrl';
import FilterSection from './components/FilterSection';
import ProfileSection from './components/ProfileSection';

function ProfilePage() {
  return (
    <div>
      <ProfileSection />
      <div className="flex flex-col flex-nowrap items-center gap-[32px] px-[21px] pb-[62px] xl:gap-[62px] xl:pb-[120px] xl:pt-[100px]">
        <FilterSection />
        <hr className="w-full" />
        {/* <ChallengeSection /> */}
        <img
          src={getImageUrl('picture/none_contents.png')}
          alt="기능 개발 중"
        />
        <div className="text-[28px] font-bold">기능 구현 중입니다.</div>
      </div>
    </div>
  );
}

export default ProfilePage;
