import { twMerge } from 'tailwind-merge';
import { useFormContext } from 'react-hook-form';
import { useId } from 'react';
import { BUTTONS_CLASSES } from '@/components/common/Button';
import Icon from '@/components/icons';
import TRANSPORTATION from '@/constants/transportation';
import { ChallengeRegisterationForm } from '@/types/posts';

function TransportSection() {
  const ACTIVE_COLOR = 'bg-green-1';

  const bicycleInputId = useId();
  const walkInputId = useId();
  const { register, watch } = useFormContext<ChallengeRegisterationForm>();

  const transportationRegister = register('type', {
    required: '이동 방법을 선택해주세요.',
  });
  const selected = watch('type');

  return (
    <div>
      <div className="leadin-[150%] mb-[32px] font-bold">
        이동 방법을 선택해주세요.
      </div>
      <div className="flex gap-2">
        <label
          htmlFor={walkInputId}
          className={twMerge(
            BUTTONS_CLASSES['tag-a'],
            'flex cursor-pointer gap-[4px]',
            selected === TRANSPORTATION.walk && ACTIVE_COLOR,
          )}
        >
          <input
            id={walkInputId}
            type="radio"
            value={TRANSPORTATION.walk}
            {...transportationRegister}
            className="h-0 w-0"
          />
          <Icon.Walk />
          도보
        </label>
        <label
          htmlFor={bicycleInputId}
          className={twMerge(
            BUTTONS_CLASSES['tag-a'],
            'flex cursor-pointer  gap-[4px]',
            selected === TRANSPORTATION.bike && ACTIVE_COLOR,
          )}
        >
          <input
            id={bicycleInputId}
            type="radio"
            value={TRANSPORTATION.bike}
            {...transportationRegister}
            className="h-0 w-0"
          />
          <Icon.Bicycle />
          자전거
        </label>
      </div>
    </div>
  );
}

export default TransportSection;
