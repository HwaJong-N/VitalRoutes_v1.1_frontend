import { twMerge } from 'tailwind-merge';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Comment from './Comment';
import SpotSlide from './SpotSlide';
import useComment from '@/hooks/challenge/useComment';
import { Comment as CommentType } from '@/types/challenge';
import MoreButton from '@/components/units/MoreButton';
import BearLoading from '@/components/common/Loading/BearLoading';
import ReplySection from '@/pages/detail/components/ReplySection';
import ReplyEditorBox from '@/pages/detail/components/ReplySection/Reply/ReplyEditorBox.tsx';

interface Props {
  className?: string;
}

function CommentSection({ className }: Props) {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, fetchNextPage, hasNextPage } = useComment(id || '0');
  const { ref, inView } = useInView();
  const [viewReply, setViewReply] = useState(false);

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  if (isLoading) return <BearLoading />;
  if (!data) return null;

  const allPages = data.pages.flat();
  const allComments = allPages.map((page) => page.data).flat();
  const filterdComments = allComments.filter(
    (comment): comment is CommentType['data'][0] => comment !== undefined,
  );

  if (filterdComments.length === 0) return null;

  const reply = () => {
    setViewReply(!viewReply);
  }

  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center gap-[62px]',
        className,
      )}
    >
      {filterdComments.map(
        ({
          participationId,
          memberId,
          memberProfile,
          nickname,
          participationImages,
          content,
          timeString,
        }) => {
          const images = participationImages.map(({ fileName }) => fileName);
          return (
            <div
              key={participationId}
              className="flex w-full flex-col gap-[42px]"
            >
              <Comment
                id={participationId}
                memberId={memberId}
                profileImgSrc={memberProfile}
                nickname={nickname}
                content={content}
                date={timeString}
                participationImages={participationImages}
              />
              <SpotSlide images={images} />
              <ReplyEditorBox pId={participationId} />
              {viewReply && <ReplySection participationId={participationId} />}
              <MoreButton title="대댓글 보기" onClick={reply} state={viewReply}/>
            </div>
          );
        },
      )}

      {hasNextPage && (
        <div ref={ref} className="flex w-full flex-col gap-[42px]">
          <Comment.Skeleton />
          <SpotSlide.Skeleton />
          <Comment.Skeleton />
          <SpotSlide.Skeleton />
        </div>
      )}
    </section>
  );
}

export default CommentSection;
