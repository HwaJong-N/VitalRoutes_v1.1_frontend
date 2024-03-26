import ChallengeCard from '@/components/units/ChallengeCard';
import { useFilterStore } from '@/store/profileStore';
import { getImageUrl } from '@/utils/getImageUrl';

function ChallengeSection() {
  useFilterStore();

  return (
    <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
      <ChallengeCard
        imgSrc={getImageUrl('intro/intro_1.png')}
        title="test"
        people={0}
        onClick={() => {}}
      />
      <ChallengeCard
        imgSrc={getImageUrl('intro/intro_1.png')}
        title="test"
        people={0}
        onClick={() => {}}
      />
      <ChallengeCard
        imgSrc={getImageUrl('intro/intro_1.png')}
        title="test"
        people={0}
        onClick={() => {}}
      />
      <ChallengeCard
        imgSrc={getImageUrl('intro/intro_1.png')}
        title="test"
        people={0}
        onClick={() => {}}
      />
      <ChallengeCard
        imgSrc={getImageUrl('intro/intro_1.png')}
        title="test"
        people={0}
        onClick={() => {}}
      />
    </div>
  );
}

export default ChallengeSection;
