import { MouseEventHandler, useEffect, useState } from 'react';
import Icon from '@/components/icons';
import ChallengeCardSkeleton from './ChallengeCardSkeleton';
import useLike from '@/hooks/challenge/useLike.ts';
import useBookmark from '@/hooks/challenge/useBookmark.ts';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  challengeId: number;
  imgSrc: string;
  title: string;
  people: number;
  likeFlag: boolean;
  bookmarkFlag: boolean;
  onClick: () => void;
}

function ChallengeCard({ onClick, challengeId, imgSrc, title, people, likeFlag: initialLikeFlag, bookmarkFlag: initialBookmarkFlag }: Props) {
  const [isHover, setIsHover] = useState(false);
  const { mutate: likeMutate, isSuccess: likeSuccess } = useLike(challengeId || -1);
  const { mutate: bookmarkMutate, isSuccess: bookmarkSuccess } = useBookmark(challengeId || -1);
  const [likeFlag, setLikeFlag] = useState(initialLikeFlag);
  const [bookmarkFlag, setBookmarkFlag] = useState(initialBookmarkFlag);
  const queryClient = useQueryClient();


  useEffect(() => {
    if (likeSuccess) {
      queryClient.clear();
      setLikeFlag(!likeFlag);
    } else if (bookmarkSuccess) {
      queryClient.clear();
      setBookmarkFlag(!bookmarkFlag);
    }
  }, [likeSuccess, bookmarkSuccess]);

  const bookMark: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    bookmarkMutate();
  };

  const like: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    likeMutate();
  };

  const lookMoreOption: MouseEventHandler<HTMLButtonElement> = (e) => {
    // 점 3개 눌렀을 때 동작하는듯
    alert('기능 개발 중입니다.');
    e.stopPropagation();
  };

  return (
    <div
      className="relative flex h-[256px] w-[318px] cursor-pointer flex-col items-center overflow-hidden rounded-[30px] bg-gradient-to-r from-black/20 to-black/0 hover:from-black/40 hover:to-black/0"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick();
      }}
      role="link"
      tabIndex={0}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className="absolute left-0 top-0 -z-10"
        src={imgSrc}
        alt="challenge card"
      />
      <div className="flex flex-[1_0_0] items-start gap-[10px] p-[32px_16px_0_24px]">
        <h1 className=" line-clamp-2 w-[228px] break-keep text-[24px] font-bold  leading-[160%] text-white">
          {title}
        </h1>
        <button aria-label="more-option" type="button" onClick={lookMoreOption}>
          <Icon.Kebab className="fill-gray-11" width={40} height={40} />
        </button>
      </div>
      {isHover && (
        <div className="flex items-center justify-between self-stretch p-[24px]">
          <span className="text-sm font-normal text-white">
            {people}명이 참가중
          </span>
          <div className="flex gap-[8px]">
            <button
              className="group rounded-full bg-gray-1/30 p-[16px] backdrop-blur hover:bg-green-1"
              type="button"
              aria-label="book mark"
              onClick={bookMark}
            >
              {bookmarkFlag ?
                <Icon.Bookmark className="fill-green-600 group-hover:fill-gray-1" width={32} height={32} />
              : <Icon.Bookmark className="fill-gray-50 group-hover:fill-green-600" width={32} height={32} />}
            </button>
            <button
              className="group rounded-full bg-gray-1/30 p-[16px] backdrop-blur hover:bg-green-1"
              type="button"
              aria-label="like"
              onClick={like}
            >
              {likeFlag ?
                <Icon.Like className="fill-red-600  group-hover:fill-gray-1" width={32} height={32} />
                : <Icon.Like className="fill-gray-50  group-hover:fill-red-600" width={32} height={32} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ChallengeCard.Skeleton = ChallengeCardSkeleton;
export default ChallengeCard;
