import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import usePopup from '@/hooks/usePopup';
import DeletePopup from './DeletePopup';
import { storeFamilyCommentMode } from '@/store/challenge/commentStore';

interface Props {
  id: number;
  memberId: number;
}

function CommentSelectPopup({ id, memberId }: Props) {
  const useCommentModeStore = storeFamilyCommentMode(id);
  const { mutate: mutateDeletion } = useCommentDeleteMutation(id);
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

  const modifyComment = () => {
    setMode('modify');
  };

  return (
    <SelectionPopup>
      {loginId === memberId ?
        <>
          <button type="button" onClick={modifyComment}>
            댓글 수정
          </button>
          <button type="button" onClick={deleteComment}>
            댓글 삭제
          </button>
        </>
        :
        <>
          <button type="button">
            댓글 숨기기
          </button>
          <button type="button">
            댓글 신고
          </button>
        </>
      }
    </SelectionPopup>
  )
    ;
}

export default CommentSelectPopup;
