import useReply from '@/hooks/challenge/useReply.ts';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import BearLoading from '@/components/common/Loading/BearLoading.tsx';
import { Reply as ReplyType } from '@/types/challenge';
import { twMerge } from 'tailwind-merge';
import Comment from '@/pages/detail/components/CommentSection/Comment';
import Reply from '@/pages/detail/components/ReplySection/Reply';
import Icon from '@/components/icons.tsx';

interface Props {
  participationId: number;
  className?: string;
}

function ReplySection({ participationId, className }: Props) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useReply(participationId);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  if (isLoading) return <BearLoading />;
  if (!data) return null;

  const allPages = data.pages.flat();
  const allReply = allPages.map((page) => page.data).flat();
  const filterdReply = allReply.filter(
    (reply): reply is ReplyType['data'][0] => reply !== undefined,
  );

  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center gap-[62px]',
        className,
      )}
    >
      {filterdReply.map(
        ({
           commentId,
           memberId,
           memberProfile,
           nickname,
           content,
           timeString,
         }) => (
          <div
            key={commentId}
            className="flex w-[850px] flex-row gap-[16px] items-center"
          >
            <Icon.ReplyArrow/>
            <Reply
              replyId={commentId}
              memberId={memberId}
              profileImgSrc={memberProfile}
              nickname={nickname}
              content={content}
              date={timeString}
            />
          </div>
        ),
      )}

      {hasNextPage && (
        <div ref={ref} className="flex w-full flex-col gap-[42px]">
          <Comment.Skeleton />
        </div>
      )}
    </section>
  );
}

export default ReplySection;
