import { motion } from 'framer-motion';
import { useRef } from 'react';
import Spot from '@/components/common/Spot';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function ImageSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const { data } = useChallengeDetail();
  const images = data?.imageList.map(image => image.imageURL);

  return (
    <motion.div className="w-full" ref={constraintsRef}>
      <motion.div
        dragConstraints={constraintsRef}
        drag="x"
        className="flex w-max justify-between gap-4"
      >
        {images?.map((imageURL, sequence) => (
          <div key={imageURL} className="flex flex-col items-center gap-4 ">
            <Spot label={`Spot ${sequence + 1}`} />
            <img
              src={imageURL}
              className="h-[121px] w-[175px] rounded-[16px]  object-cover "
              alt="spot"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ImageSection;
