import Banner from '@/components/common/Banner';
import IntroSection from './components/IntroSection';
import RegisterSection from './components/RegisterSection';
import SlideSection from './components/SlideSection';
import { getImageUrl } from '@/utils/getImageUrl';

function HomePage() {
  return (
    <div className="mb-[62px] flex flex-col items-center gap-[62px]  xl:mb-[160px] xl:gap-[160px]">
      <Banner
        title={`Move,\nConnect,\nThrive`}
        subTitle="With VitalRoutes"
        imgSrc={getImageUrl('banner/running.png')}
      />
      <IntroSection />
      <SlideSection />
      <RegisterSection />
    </div>
  );
}

export default HomePage;
