import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getImageUrl } from '@/utils/getImageUrl';
import ChallengeCard from '@/components/units/ChallengeCard';
import BearLoading from '@/components/common/Loading/BearLoading';
import Button from '@/components/common/Button';
import useChallengeListInfinite from '@/hooks/challenge/useChallengeListInfinite';

interface Props {
  selectedTag: string;
  searchQuery: string;
}

function ChallengeListSection({ selectedTag, searchQuery }: Props) {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useChallengeListInfinite(selectedTag, searchQuery);
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  const allPages = data?.pages.flat();
  const allChallenges = allPages?.map((page) => page.data).flat();

  if (isLoading) {
    return <BearLoading />;
  }

  if (!allChallenges || allChallenges.length === 0) {
    return (
      <div className="flex flex-col items-center gap-[62px]">
        <div className="flex flex-col items-center gap-[16px]">
          <img
            className="mb-[16px]"
            src={getImageUrl('picture/none_contents.png')}
            alt="none-contents"
          />
          <div className="text-[24px] font-bold">등록된 챌린지가 없습니다.</div>
        </div>
        <Link to="/challenge/registration">
          <Button variant="third-c">챌린지 등록하러 가기</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {allChallenges.map(
          ({ challengeId, title, titleImg, participationCount, likeFlag, bookmarkFlag }) => (
            <ChallengeCard
              key={challengeId}
              challengeId={challengeId}
              imgSrc={titleImg}
              title={title}
              people={participationCount}
              likeFlag={likeFlag}
              bookmarkFlag={bookmarkFlag}
              onClick={() => {
                navigate(`/challenge/${String(challengeId)}`);
              }}
            />
          ),
        )}
      </div>
      {hasNextPage && (
        <div
          className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4"
          ref={ref}
        >
          <ChallengeCard.Skeleton />
          <ChallengeCard.Skeleton />
          <ChallengeCard.Skeleton />
          <ChallengeCard.Skeleton />
        </div>
      )}
    </>
  );
}

export default ChallengeListSection;
