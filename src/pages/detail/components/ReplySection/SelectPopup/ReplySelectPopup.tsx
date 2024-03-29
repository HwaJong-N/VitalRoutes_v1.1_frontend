import usePopup from '@/hooks/usePopup.ts';
import { storeFamilyReplyMode } from '@/store/challenge/replyStore.ts';
import useReplyDeleteMutation from '@/hooks/challenge/useReplyDeleteMutation.ts';
import DeletePopup from '@/pages/detail/components/CommentSection/Comment/CommentSelectPopup/DeletePopup.tsx';
import SelectionPopup from '@/components/common/SelectionPopup.tsx';
import useHideReply from '@/hooks/challenge/useHideReply.ts';
import axios from 'axios';
import Popup from '@/components/common/Popup.tsx';
import Button from '@/components/common/Button.tsx';
import ReportPopup from '@/components/common/ReportPopup.tsx';


interface Props {
  replyId: number;
  memberId: number;
}

function ReplySectionPopup({replyId, memberId}: Props) {
  const useReplyModeStore = storeFamilyReplyMode(replyId);
  const { mutate: mutateDeletion } = useReplyDeleteMutation(replyId);
  const { mutate: mutateHide } = useHideReply(replyId);
  const { setMode } = useReplyModeStore();
  const { openPopup, closePopup } = usePopup();
  const userInfo = localStorage.getItem('loginInfo');
  let loginId = 0;

  if (userInfo) {
    const parsedInfo = JSON.parse(userInfo);
    loginId = parsedInfo.memberId;
  }

  const hideReply = () => {
    mutateHide();
    window.location.reload();
  }

  const deleteReply = () => {
    openPopup(
      <DeletePopup
        onCancleClick={closePopup}
        onConfirmClick={() => {
          mutateDeletion();
          closePopup();
        }}
      />,
    );
  };

  const modifyReply = () => {
    setMode('modify');
  };

  const reportToServer = async (text: string) => {
    await axios.post(`/report/comment/${replyId}`, {reason: text})
      .then(() => {
          openPopup(<Popup
            content="신고가 접수되었습니다"
            buttons={<Button variant="popup-point" onClick={closePopup}>확인</Button>} />);
        }
      );
  }

  const reportReply = () => {
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
    <SelectionPopup>
      {loginId === memberId ?
        <>
          <button type="button" onClick={modifyReply}>
            수정하기
          </button>
          <button type="button" onClick={deleteReply}>
            삭제하기
          </button>
        </>
        :
        <>
          <button type="button" onClick={hideReply}>
            숨기기
          </button>
          <button type="button" onClick={reportReply}>
            신고하기
          </button>
        </>
      }
    </SelectionPopup>
  );
}

export default ReplySectionPopup;