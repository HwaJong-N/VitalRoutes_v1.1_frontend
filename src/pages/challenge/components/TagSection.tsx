import { twMerge } from 'tailwind-merge';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

interface Props {
  className?: string;
}

function TagSection({ className }: Props) {
  const contraintsRef = useRef(null);
  return (
    <div className="w-full" ref={contraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={contraintsRef}
        className={twMerge('mx-auto flex w-max gap-[8px]', className)}
      >
        <Button variant="tag-a">신규</Button>
        <Button variant="tag-a">인기순</Button>
        <Button variant="tag-a">추천순</Button>
        <Button variant="tag-a">도보</Button>
        <Button variant="tag-a">자전거</Button>
      </motion.div>
    </div>
  );
}

export default TagSection;
