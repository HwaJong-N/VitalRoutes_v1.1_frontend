import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

interface Props {
  className?: string;
  onTagSelect: (tag: string) => void;
}

function TagSection({ className, onTagSelect }: Props) {
  const contraintsRef = useRef(null);
  const [selectedTag, setSelectedTag] = useState('신규'); // 디폴트 값으로 '신규' 태그 선택

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    onTagSelect(tag); // 선택된 태그 정보를 부모 컴포넌트로 전달
  };

  return (
    <div className="w-full" ref={contraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={contraintsRef}
        className={twMerge('mx-auto flex w-max gap-[8px]', className)}
      >
        <Button
          variant="tag-a"
          className={selectedTag === '신규' ? 'bg-green-1 text-black' : ''}
          onClick={() => handleTagSelect('신규')}
        >
          신규
        </Button>
        <Button
          variant="tag-a"
          className={selectedTag === '인기순' ? 'bg-green-1 text-black' : ''}
          onClick={() => handleTagSelect('인기순')}
        >
          인기순
        </Button>
        <Button
          variant="tag-a"
          className={selectedTag === '추천순' ? 'bg-green-1 text-black' : ''}
          onClick={() => handleTagSelect('추천순')}
        >
          추천순
        </Button>
        <Button
          variant="tag-a"
          className={selectedTag === '도보' ? 'bg-green-1 text-black' : ''}
          onClick={() => handleTagSelect('도보')}
        >
          도보
        </Button>
        <Button
          variant="tag-a"
          className={selectedTag === '자전거' ? 'bg-blue-1 text-black' : ''}
          onClick={() => handleTagSelect('자전거')}
        >
          자전거
        </Button>
      </motion.div>
    </div>
  );
}

export default TagSection;
