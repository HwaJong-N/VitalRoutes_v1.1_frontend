import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import usePopup from '@/hooks/usePopup';
import { getGpsFromImg } from '@/utils/ExifReader';
import GeolocationErrorPopup from './GeolocationErrorPopup';
import { useGpsNotfoundNoticeStore } from '@/store/challenge/writeStor';
import NotfoundGPSPopup from './NotfoundGPSPopup';
import { ChallengeRegisterationForm } from '@/types/posts';

function useSpotRegister() {
  const { isNoticed, setIsNoticed } = useGpsNotfoundNoticeStore();
  const { openPopup } = usePopup();
  const { register, setValue, resetField } =
    useFormContext<ChallengeRegisterationForm>();

  const getSpotRegister = (index: number) => {
    const required =
      index === 0 || index === 1 ? '최소 두장의 사진을 등록해주세요.' : false;

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const targetFile = files?.item(0);
      if (!targetFile) return;

      try {
        const { lat, lng } = await getGpsFromImg(targetFile);
        setValue(`spots.${index}.lat`, lat);
        setValue(`spots.${index}.lng`, lng);
      } catch (error) {
        if (!isNoticed) {
          openPopup(<NotfoundGPSPopup />);
          setIsNoticed(true);
        }
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            setValue(`spots.${index}.lat`, latitude);
            setValue(`spots.${index}.lng`, longitude);
          },
          () => {
            resetField(`spots.${index}.files`);
            openPopup(<GeolocationErrorPopup />);
          },
        );
      }
    };

    return register(`spots.${index}.files`, {
      onChange,
      required,
    });
  };

  return { getSpotRegister };
}

export default useSpotRegister;
