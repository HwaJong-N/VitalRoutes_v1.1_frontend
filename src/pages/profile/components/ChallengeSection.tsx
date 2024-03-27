import ChallengeCard from '@/components/units/ChallengeCard';
import { useFilterStore } from '@/store/profileStore';
import { getImageUrl } from '@/utils/getImageUrl';
import useFilteredChallengeListInfinite from '@/hooks/profile/useFilteredChallengeListInfinite.ts';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import BearLoading from '@/components/common/Loading/BearLoading.tsx';
import { useNavigate } from 'react-router-dom';

function ChallengeSection() {

  const { filter } = useFilterStore();
  const { data, isLoading, hasNextPage, fetchNextPage } = useFilteredChallengeListInfinite(filter); // 필터에 따른 챌린지 가져오기
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  const allPages = data?.pages.flat();
  const allChallenges = allPages?.map((page) => page.data).flat();

  console.log('allChallenges = ', allChallenges);

  if (isLoading) {
    return <BearLoading />;
  }

  if (!allChallenges || allChallenges.length === 0) {
    return (
      <>
        <img
          src={getImageUrl('picture/none_contents.png')}
          alt="챌린지가 없습니다"
        />
        <div className="text-[28px] font-bold">챌린지가 없습니다.</div>
      </>
    );
  }

  if (allChallenges.length === 1) {
    const challenge = allChallenges[0];
    if (challenge.challengeId == null) {
      return (
        <>
          <img
            src={getImageUrl('picture/none_contents.png')}
            alt="챌린지가 없습니다"
          />
          <div className="text-[28px] font-bold">챌린지가 없습니다.</div>
        </>
      );
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {allChallenges.map(
          ({ challengeId, title, titleImg, participationCount, likeFlag, bookmarkFlag }) => (
            <ChallengeCard
              key={challengeId}
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

export default ChallengeSection;
