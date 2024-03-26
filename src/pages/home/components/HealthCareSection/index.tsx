import { twMerge } from 'tailwind-merge';
import SectionTitle from '../../../../components/common/SectionTitle';
import HealthCareCard from './HealthCareCard';
import { getImageUrl } from '@/utils/getImageUrl';
import { NAVIGATION_NEW } from '@/constants/navigation';

const MOCK_DATA = [
  {
    imgSrc: getImageUrl('healthcare/stress.png'),
    title: '마음의 안정을 찾는 법: 스트레스 관리의 최신 전략',
    desc: '스트레스 관리의 핵심은 마음챙김과 자기 인식을 통한 일상의 압박감 감소입니다. 규칙적인 명상, 딥브리딩 기법, 그리고 긍정적인 사고 방식을 키우는 것이 중요합니다.',
  },
  {
    imgSrc: getImageUrl('healthcare/nutrition.png'),
    title: '영양과 면역력: 강한 면역 체계를 위한 최고의 식품',
    desc: '비타민 C, D, 아연이 풍부한 식품들은 면역 체계를 강화하는데 필수적입니다. 시금치, 요구르트, 견과류와 같은 식품들을 일상 식단에 포함시켜 건강을 유지하세요.',
  },
  {
    imgSrc: getImageUrl('healthcare/food.png'),
    title: '건강한 심장을 위한 10가지 생활 습관',
    desc: '규칙적인 운동과 건강한 식단 유지는 심장 건강의 기본입니다. 또한, 스트레스 관리, 충분한 수면, 그리고 금연은 심장 질환의 위험을 줄이는 데 중요한 역할을 합니다.',
  },
  {
    imgSrc: getImageUrl('healthcare/aging.png'),
    title: '건강한 노화: 중년기 이후의 건강 유지 전략',
    desc: '건강한 노화는 균형 잡힌 식단, 정기적인 신체 활동, 그리고 사회적 연결감 유지에서 시작됩니다. 또한, 정기적인 건강 검진을 통해 노화와 관련된 건강 문제를 조기에 발견하고 대처하는 것이 중요합니다.',
  },
];

interface Props {
  className?: string;
}

function HealthCareSection({ className = '' }: Props) {
  return (
    <section className={twMerge('flex flex-col items-center ', className)}>
      <SectionTitle
        subTitle={NAVIGATION_NEW.wellness.title}
        title="건강 관리에 관심이 많으신가요?"
        href={NAVIGATION_NEW.wellness.href}
        className="mb-[32px] xl:mb-[62px]"
      />
      <div className="grid w-fit grid-cols-1 gap-4 sm:grid-cols-2">
        {MOCK_DATA.map(({ imgSrc, title, desc }) => (
          <HealthCareCard
            key={title}
            imgSrc={imgSrc}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
}

export default HealthCareSection;
