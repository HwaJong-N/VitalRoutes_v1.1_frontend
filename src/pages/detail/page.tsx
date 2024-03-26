import Banner from '@/components/common/Banner';
import KaKaoMap from '../../components/units/KakaoMap';
import ImageSection from './components/ImageSection';
import DescSection from './components/DescSection';
import TagSection from './components/TagSection';
import CommentSection from './components/CommentSection';
import JoinButton from './components/JoinButton';
import CommentEditor from './components/CommentEditor';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';
import BearLoading from '@/components/common/Loading/BearLoading';
import { useLoginStore } from '@/store/user/loginInfoStore';

function ChallengeDetailPage() {
  const { isLogin } = useLoginStore();
  const { data: challenge, isLoading } = useChallengeDetail();

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <BearLoading />;
      </div>
    );
  if (!challenge) return <>데이터가 없습니다.</>;

  return (
    <>
      <Banner
        title={challenge.title}
        subTitle={`${challenge.totalParticipation}명이 참가중`}
        imgSrc={challenge.titleImgURL}
        moreInfo={{
          profileImge: challenge.profileImg,
          nickname: challenge.nickname || '',
          view: challenge.viewCount || 0,
          comment: challenge.totalParticipation || 0,
          like: 0,
          likeFlag: challenge.likeFlag,
          bookmarkFlag: challenge.bookmarkFlag
        }}
      />
      <div className="mx-auto flex max-w-[940px] flex-col items-center p-[21px] xl:p-0">
        <div className="my-[120px] flex w-full flex-col items-center  gap-[52px]">
          <div className="h-[360px] w-full overflow-hidden rounded-[30px]">
            <KaKaoMap spots={challenge.imageList} />
          </div>
          <ImageSection />
          <DescSection />
          <TagSection />
          <div className="flex w-full flex-col items-end gap-[56px]">
            <button
              type="button"
              className="text-sm text-gray-3 hover:underline xl:text-base"
            >
              게시글 신고하기
            </button>
            {isLogin ? (
              <>
                <CommentEditor />
                <CommentSection className="my-[120px]" />
              </>
            ) : (
              <JoinButton />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeDetailPage;
