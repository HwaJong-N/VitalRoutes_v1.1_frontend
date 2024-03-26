import { useFormContext } from 'react-hook-form';
import KaKaoMap from '@/components/units/KakaoMap';
import { ChallengeRegisterationForm } from '@/types/posts';
import SpotInputList from './SpotInputList';

function MapSection() {
  const { watch } = useFormContext<ChallengeRegisterationForm>();

  const spots = watch('spots');
  const spotGps = spots
    .map((spot) => {
      const latitude = spot?.lat;
      const longitude = spot?.lng;
      return { latitude, longitude };
    })
    .filter(
      (spot): spot is { latitude: number; longitude: number } =>
        spot?.latitude !== undefined && spot?.longitude !== undefined,
    );

  return (
    <>
      <div className="h-[450px] w-full overflow-hidden rounded-[30px]">
        <KaKaoMap spots={spotGps} />
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="font-bold leading-[150%] ">
          사진을 촬영해주세요. (최소 2개, 최대 5개 까지 가능)
        </div>

        <SpotInputList />
      </div>
    </>
  );
}

export default MapSection;
