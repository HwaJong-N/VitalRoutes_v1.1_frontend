import { twMerge } from 'tailwind-merge';
import Icon from '@/components/icons';
import { MoreInfo } from '@/types';
import { MouseEventHandler, useEffect, useState } from 'react';
import useLike from '@/hooks/challenge/useLike.ts';
import useBookmark from '@/hooks/challenge/useBookmark.ts';
import { useQueryClient } from '@tanstack/react-query';

interface BannerMoreInfoProps extends MoreInfo {
  className?: string;
}

function BannerMoreInfo({
  challengeId,
  profileImge,
  nickname,
  view,
  comment,
  like: likeCount,
  likeFlag: initialLikeFlag,
  bookmarkFlag: initialBookmarkFlag,
  className,
}: BannerMoreInfoProps) {

  const { mutate: likeMutate, isSuccess: likeSuccess } = useLike(challengeId || -1);
  const { mutate: bookmarkMutate, isSuccess: bookmarkSuccess } = useBookmark(challengeId || -1);
  const [likeFlag, setLikeFlag] = useState(initialLikeFlag);
  const [bookmarkFlag, setBookmarkFlag] = useState(initialBookmarkFlag);
  const [like, setLike] = useState(likeCount);
  const queryClient = useQueryClient();


  useEffect(() => {
    if (likeSuccess) {
      queryClient.clear();
      if (likeFlag) {
        setLike(like - 1);
      } else {
        setLike(like + 1);
      }
      setLikeFlag(!likeFlag);
    } else if (bookmarkSuccess) {
      queryClient.clear();
      setBookmarkFlag(!bookmarkFlag);
    }
  }, [likeSuccess, bookmarkSuccess]);

  const bookMarkBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    bookmarkMutate();
  };

  const likeBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    likeMutate();
  };


  return (
    <div
      className={twMerge(
        'flex flex-col justify-between gap-[23px] xl:flex-row',
        className,
      )}
    >
      <div className="flex items-center gap-[8px] self-start rounded-full bg-black/50 p-[4px] pr-[40px] text-gray-50 backdrop-blur xl:self-auto xl:p-[8px] xl:pr-[60px]">
        <img
          className="h-[33px] w-[33px] rounded-full xl:h-[38px] xl:w-[38px]"
          src={profileImge}
          alt="author"
        />
        <div className="text-[12px] font-bold">{nickname}</div>
      </div>

      <div className="flex items-center gap-[32px] self-end text-gray-50 xl:self-auto">
        <div className="flex gap-[16px] ">
          <div className="flex items-center gap-[8px]">
            <Icon.View className="h-[20px] w-[20px] fill-gray-50 xl:h-[32px] xl:w-[32px]" />
            {view}
          </div>
          <div className="flex items-center gap-[8px]">
            <Icon.Comment className="h-[20px] w-[20px] fill-gray-50 xl:h-[32px] xl:w-[32px]" />
            {comment}
          </div>
          <div className="flex items-center gap-[8px]">
            <Icon.Heart className="h-[20px] w-[20px] fill-gray-50 xl:h-[32px] xl:w-[32px]" />
            {like}
          </div>
        </div>

        <div className="flex gap-[16px]">
          <button
            className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-1/30 hover:bg-gray-11 xl:h-[62px] xl:w-[62px]"
            type="button"
            aria-label="bookmark"
            onClick={bookMarkBtn}
          >
            {bookmarkFlag ?
              <Icon.Bookmark className="h-[22px]  w-[22px] fill-green-600  group-hover:fill-gray-1 xl:h-[40px] xl:w-[40px]" />
              : <Icon.Bookmark className="h-[22px]  w-[22px] fill-gray-11  group-hover:fill-gray-1 xl:h-[40px] xl:w-[40px]" />
            }

          </button>
          <button
            className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-1/30 hover:bg-gray-11 xl:h-[62px] xl:w-[62px]"
            type="button"
            aria-label="bookmark"
            onClick={likeBtn}
          >
            {likeFlag ?
              <Icon.Like className="h-[22px] w-[22px] fill-red-600  group-hover:fill-gray-1 xl:h-[40px] xl:w-[40px]" />
              : <Icon.Like className="h-[22px] w-[22px] fill-gray-11  group-hover:fill-gray-1 xl:h-[40px] xl:w-[40px]" />
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerMoreInfo;
