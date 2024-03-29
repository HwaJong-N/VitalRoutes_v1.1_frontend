import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import usePopup from '@/hooks/usePopup';
import DeletePopup from './DeletePopup';
import { storeFamilyCommentMode } from '@/store/challenge/commentStore';
import useHideComment from '@/hooks/challenge/useHideComment.ts';
import axios from 'axios';
import Popup from '@/components/common/Popup.tsx';
import Button from '@/components/common/Button.tsx';
import ReportPopup from '@/components/common/ReportPopup.tsx';

interface Props {
  id: number; // 참여 ID
  memberId: number;
}

function CommentSelectPopup({ id, memberId }: Props) {
  const useCommentModeStore = storeFamilyCommentMode(id);
  const { mutate: mutateDeletion } = useCommentDeleteMutation(id);
  const { mutate: mutateHide } = useHideComment(id);
  const { setMode } = useCommentModeStore();
  const { openPopup, closePopup } = usePopup();
  const userInfo = localStorage.getItem('loginInfo');
  let loginId = 0;

  if (userInfo) {
    const parsedInfo = JSON.parse(userInfo);
    loginId = parsedInfo.memberId;
  }

  const deleteComment = () => {
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

  const hideComment = () => {
    mutateHide();
    window.location.reload();
  }

  const modifyComment = () => {
    setMode('modify');
  };

  const reportToServer = async (text: string) => {
    await axios.post(`/report/participation/${id}`, {reason: text})
      .then(() => {
          openPopup(<Popup
            content="신고가 접수되었습니다"
            buttons={<Button variant="popup-point" onClick={closePopup}>확인</Button>} />);
        }
      );
  }

  const reportComment = () => {
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
          <button type="button" onClick={modifyComment}>
            수정하기
          </button>
          <button type="button" onClick={deleteComment}>
            삭제하기
          </button>
        </>
        :
        <>
          <button type="button" onClick={hideComment}>
            숨기기
          </button>
          <button type="button" onClick={reportComment}>
            신고하기
          </button>
        </>
      }
    </SelectionPopup>
  )
    ;
}

export default CommentSelectPopup;
