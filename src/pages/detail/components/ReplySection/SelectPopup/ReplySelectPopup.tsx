import usePopup from '@/hooks/usePopup.ts';
import { storeFamilyReplyMode } from '@/store/challenge/replyStore.ts';
import useReplyDeleteMutation from '@/hooks/challenge/useReplyDeleteMutation.ts';
import DeletePopup from '@/pages/detail/components/CommentSection/Comment/CommentSelectPopup/DeletePopup.tsx';
import SelectionPopup from '@/components/common/SelectionPopup.tsx';
import useHideReply from '@/hooks/challenge/useHideReply.ts';


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
          <button type="button">
            신고하기
          </button>
        </>
      }
    </SelectionPopup>
  );
}

export default ReplySectionPopup;