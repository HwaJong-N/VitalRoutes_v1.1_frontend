import { getImageUrl } from '@/utils/getImageUrl';
import SectionTitle from '../../../../components/common/SectionTitle';
import Card from './Card';
import { NAVIGATION_NEW } from '@/constants/navigation';

interface Props {
  className?: string;
}

const CARDS_INFO = [
  {
    imgSrc: getImageUrl('registration/registration_1.png'),
    title: '산책하기',
    desc: '원하는 산책경로로 이동해보세요',
  },
  {
    imgSrc: getImageUrl('registration/registration_2.png'),
    title: '인증사진 찰칵!',
    desc: '인증이 필요한 지점에서 사진을 찍어주세요.',
  },
  {
    imgSrc: getImageUrl('registration/registration_3.png'),
    title: '챌린지 글 남기기',
    desc: '챌린지할 내용을 상세하게 적어주세요.',
  },
];

function RegisterSection({ className = '' }: Props) {
  return (
    <section className={className}>
      <SectionTitle
        title="신규 챌린지를 등록해보세요."
        subTitle={NAVIGATION_NEW.registration.title}
        href={NAVIGATION_NEW.registration.href}
        className="mb-[32px] xl:mb-[62px]"
      />

      <div className="relative flex items-center justify-center gap-6 xl:gap-[105px]">
        <hr className="absolute bottom-[108px] hidden h-[6px] w-full border-none bg-gradient-to-r from-gray-5/0 via-gray-5 to-gray-5/0 xl:block" />
        {CARDS_INFO.map(({ imgSrc, title, desc }) => (
          <Card key={title} imgSrc={imgSrc} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default RegisterSection;
