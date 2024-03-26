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
          className={filter === 'myChallenge' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('myChallenge')}
        >
          나의 챌린지
        </Button>
        <Button
          variant="tab-a"
          className={filter === 'participated' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('participated')}
        >
          참여 중인 챌린지
        </Button>
        <Button
          variant="tab-a"
          className={filter === 'liked' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('liked')}
        >
          좋아요한 챌린지
        </Button>
        <Button
          variant="tab-a"
          className={filter === 'bookmarked' ? ACTIVE_COLOR : undefined}
          onClick={() => setFilter('bookmarked')}
        >
          북마크한 챌린지
        </Button>
      </motion.div>
    </div>
  );
}

export default FilterSection;
