import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { BUTTONS_CLASSES } from '@/components/common/Button';
import { ChallengeUpdateForm } from '@/types/posts';
import { useEffect } from 'react';

interface Props {
  tagList: string[]
}

function ChallengeTagSection({ tagList } : Props) {
  const ACTIVE_COLOR = 'bg-green-1';
  const TAGS = [
    '활동적인',
    '평화로운',
    '독특한',
    '자연 친화적인',
    '해변가',
    '테마적인',
    '사진 찍기 좋은',
    '가족 친화적',
  ];
  const { register, watch } = useFormContext<ChallengeUpdateForm>();

  useEffect(() => {
    tagList.forEach((tag, idx) => {
      register(`tags.${idx}`, { value: tag }); // 각 태그 등록
    });
  }, [register, tagList]);

  return (
    <div>
      <div className="leadin-[150%] mb-[32px] font-bold">
        방문하신 곳의 분위기와 경험은 어떠셨나요? (다중선택 가능)
      </div>
      <div className="flex gap-0">
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag, idx) => {
            // 선택된 태그 여부 확인
            const watchedTag = watch('tags');
            const isSelected = watchedTag && watchedTag.includes(tag);

            return (
              <label
                key={tag}
                htmlFor={tag}
                className={twMerge(
                  BUTTONS_CLASSES['tag-a'],
                  'cursor-pointer',
                  isSelected && ACTIVE_COLOR, // 선택된 태그에만 활성화 클래스 적용
                )}
              >
                {tag}
                <input
                  id={tag}
                  {...register(`tags.${idx}`)}
                  value={tag}
                  type="checkbox"
                  hidden
                  checked={isSelected} // 선택된 태그의 체크 여부 설정
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default ChallengeTagSection;
