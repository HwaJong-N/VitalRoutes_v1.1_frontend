import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import usePopup from '@/hooks/usePopup';
import DeletePopup from './DeletePopup';
import { storeFamilyCommentMode } from '@/store/challenge/commentStore';
import useHideComment from '@/hooks/challenge/useHideComment.ts';

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
          <button type="button">
            신고하기
          </button>
        </>
      }
    </SelectionPopup>
  )
    ;
}

export default CommentSelectPopup;
