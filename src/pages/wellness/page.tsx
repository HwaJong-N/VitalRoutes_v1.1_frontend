import { getImageUrl } from '@/utils/getImageUrl';

function WellnessPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <img src={getImageUrl('picture/preparing_contents.png')} alt="" />
      <div className="text-4xl font-bold">콘텐츠 준비 중입니다.</div>
    </div>
  );
}

export default WellnessPage;
