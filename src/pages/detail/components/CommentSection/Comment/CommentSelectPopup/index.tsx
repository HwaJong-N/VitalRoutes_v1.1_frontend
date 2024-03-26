import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import usePopup from '@/hooks/usePopup';
import DeletePopup from './DeletePopup';
import { storeFamilyCommentMode } from '@/store/challenge/commentStore';

interface Props {
  id: number;
}

function CommentSelectPopup({ id }: Props) {
  const useCommentModeStore = storeFamilyCommentMode(id);
  const { mutate: mutateDeletion } = useCommentDeleteMutation(id);
  const { setMode } = useCommentModeStore();
  const { openPopup, closePopup } = usePopup();

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
      <button type="button" onClick={modifyComment}>
        댓글 수정
      </button>
      <button type="button" onClick={deleteComment}>
        댓글 삭제
      </button>
    </SelectionPopup>
  );
}

export default CommentSelectPopup;
