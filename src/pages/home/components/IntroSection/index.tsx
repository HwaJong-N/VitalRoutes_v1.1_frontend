import IntroCard from './IntroCard';
import { INTRO_CARD } from '@/constants/intro';

function IntroSection() {
  return (
    <>
      <div className="text-center text-[16px] font-bold leading-[140%] xl:text-[42px]">
        <div>VitalRoutes는 단순한 산책 경로 추천을 넘어서</div>
        <div>사용자들이 건강한 생활 방식을 채택하고</div>
        <div>서로 소통할 수 있는 독특한 커뮤니티 서비스입니다.</div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center gap-[40px] xl:flex-row xl:gap-0">
        {INTRO_CARD.map(({ imgSrc, title, desc }) => (
          <IntroCard key={title} imgSrc={imgSrc} title={title} desc={desc} />
        ))}
      </div>
    </>
  );
}

export default IntroSection;
