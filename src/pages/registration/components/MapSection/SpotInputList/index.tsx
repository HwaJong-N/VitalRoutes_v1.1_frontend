import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import SpotFileInput from '@/components/units/SpotFileInput';
import useSpotRegister from './utils';
import { ChallengeRegisterationForm } from '@/types/posts';

function SpotInputList() {
  const constraintsRef = useRef(null);
  const { watch } = useFormContext<ChallengeRegisterationForm>();
  const { getSpotRegister } = useSpotRegister();

  return (
    <div className="w-full" ref={constraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        className="flex w-max gap-[4.6px] xl:justify-between"
      >
        {[1, 2, 3, 4, 5].map((key, index) => {
          const spotLabel = `Spot ${key}`;
          const spot = watch('spots')[index];
          const file = spot?.files?.item(0);
          const previewImgSrc = file ? URL.createObjectURL(file) : undefined;
          const spotRegister = getSpotRegister(index);

          return (
            <SpotFileInput
              key={key}
              previewImgSrc={previewImgSrc}
              spotKey={spotLabel}
              {...spotRegister}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default SpotInputList;
