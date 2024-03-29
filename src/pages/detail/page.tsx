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
import SelectButton from '@/components/units/Select.tsx';
import ChallengeSelectPopup from '@/pages/detail/components/ChallengePopup/ChallengeSelectPopup.tsx';
import TransportSection from '@/pages/detail/components/TransportSection.tsx';
import ReportPopup from '@/components/common/ReportPopup.tsx';
import usePopup from '@/hooks/usePopup.ts';
import Button from '@/components/common/Button.tsx';
import axios from 'axios';
import Popup from '@/components/common/Popup.tsx';

function ChallengeDetailPage() {
  const { isLogin } = useLoginStore();
  const { data: challenge, isLoading } = useChallengeDetail();
  const { openPopup, closePopup } = usePopup();
  const userInfo = localStorage.getItem('loginInfo');
  let loginId = 0;

  if (userInfo) {
    const parsedInfo = JSON.parse(userInfo);
    loginId = parsedInfo.memberId;
  }

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <BearLoading />;
      </div>
    );
  if (!challenge) return <>데이터가 없습니다.</>;

  const reportToServer = async (text: string) => {
    await axios.post(`/report/challenge/${challenge.challengeId}`, {reason: text})
      .then(() => {
        openPopup(<Popup
          content="신고가 접수되었습니다"
          buttons={<Button variant="popup-point" onClick={closePopup}>확인</Button>} />);
      }
    );
  }

  const reportChallenge = () => {
    openPopup(<ReportPopup
      content="이 게시글을 신고하는 이유가 무엇인가요?"
      placeHolder="신고 내용은 2000자 이내로 간결하게 요약해 주시면 감사하겠습니다."
      onConfirm={(text) => {
        reportToServer(text); // 수정: 확인 버튼 클릭 시 reportToServer 함수 호출하여 신고 내용 전송
        closePopup(); // 수정: 확인 버튼 클릭 시 팝업 닫기
      }}
      buttons={
        <Button variant="popup" onClick={closePopup}>
          취소
        </Button>
      }
    />);
  }



  return (
    <>
      <Banner
        title={challenge.title}
        subTitle={`${challenge.totalParticipation}명이 참가중`}
        imgSrc={challenge.titleImgURL}
        region={challenge.region}
        moreInfo={{
          challengeId: challenge.challengeId,
          profileImge: challenge.profileImg,
          nickname: challenge.nickname || '',
          view: challenge.viewCount || 0,
          comment: challenge.totalParticipation || 0,
          like: challenge.likeCount,
          likeFlag: challenge.likeFlag,
          bookmarkFlag: challenge.bookmarkFlag,
        }}
      />
      <div className="mx-auto flex max-w-[940px] flex-col items-center p-[21px] xl:p-0">
        <div className="my-[120px] flex w-full flex-col items-center  gap-[52px]">
          <div className="flex w-full justify-between items-center">
            <div className="flex-grow text-center font-bold">{challenge.roadAddress}</div>
            {challenge.memberId === loginId &&
              <div>
                <SelectButton selectPopup={<ChallengeSelectPopup challengeId={challenge.challengeId} />} />
              </div>
            }
          </div>
          <div className="h-[360px] w-full overflow-hidden rounded-[30px]">
            <KaKaoMap spots={challenge.imageList} />
          </div>
          <ImageSection />
          <DescSection />
          <TransportSection />
          <TagSection />
          <div className="flex w-full flex-col items-end gap-[56px]">
            {challenge.memberId !== loginId &&
              <button
                type="button"
                className="text-sm text-gray-3 hover:underline xl:text-base"
                onClick={reportChallenge}
              >
                게시글 신고하기
              </button>
            }
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
