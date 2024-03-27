import { motion } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/common/Button';
import { MOBILE_BOUND_WIDTH } from '@/constants/responsive';
import useWindowSize from '@/hooks/useWindowSize';
import { useFilterStore } from '@/store/profileStore';

function FilterSection() {
  const ACTIVE_COLOR = 'bg-gray-1 text-gray-8';
  const { filter, setFilter } = useFilterStore();
  const constraintsRef = useRef(null);
  const { width } = useWindowSize();
  const isMobile = width < MOBILE_BOUND_WIDTH;

  return (
    <div className="mx-auto w-full" ref={constraintsRef}>
      <motion.div
        drag={isMobile ? 'x' : false}
        className="mx-auto flex w-max justify-start gap-[16px] "
        dragConstraints={constraintsRef}
      >
        <Button
          variant="tab-a"
          className={filter === 'my-challenges' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('my-challenges')}
        >
          나의 챌린지
        </Button>
        <Button
          variant="tab-a"
          className={filter === 'participate-challenges' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('participate-challenges')}
        >
          참여 중인 챌린지
        </Button>
        <Button
          variant="tab-a"
          className={filter === 'like-challenges' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('like-challenges')}
        >
          좋아요한 챌린지
        </Button>
        <Button
          variant="tab-a"
          className={filter === 'bookmark-challenges' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('bookmark-challenges')}
        >
          북마크한 챌린지
        </Button>
      </motion.div>
    </div>
  );
}

export default FilterSection;
