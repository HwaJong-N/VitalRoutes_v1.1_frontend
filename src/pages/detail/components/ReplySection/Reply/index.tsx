import { FormProvider, useForm } from 'react-hook-form';
import { storeFamilyReplyMode } from '@/store/challenge/replyStore.ts';
import useReplyModifyMutation from '@/hooks/challenge/useReplyModifyMutation.ts';
import SelectButton from '@/components/units/Select.tsx';
import ModifyInput from '@/pages/detail/components/CommentSection/Comment/ModifyInput.tsx';
import CommentSkeleton from '@/pages/detail/components/CommentSection/Comment/CommentSkeleton.tsx';
import ReplySelectPopup from '@/pages/detail/components/ReplySection/SelectPopup/ReplySelectPopup.tsx';

interface Props {
  memberId: number;
  profileImgSrc: string;
  nickname: string;
  content: string;
  date: string;
  replyId: number; // 댓글 id
}

function Reply({ replyId, memberId, profileImgSrc, nickname, content, date, }: Props) {
  const useReplyModeStore = storeFamilyReplyMode(replyId);
  const { mode, setMode } = useReplyModeStore();
  const { mutate: mutateModify } = useReplyModifyMutation(replyId);
  const methods = useForm({
    defaultValues: {
      comment: content,
    },
  });

  const confirmModify = () => {
    const comment = methods.getValues('comment');
    mutateModify({ content: comment });
    setMode('view');
  };

  const cancelModify = () => {
    setMode('view');
  };

  return (
    <FormProvider {...methods}>
      <div className="flex w-full justify-between gap-2">
        <img
          className="h-[53px] w-[53px] rounded-full bg-gray-5 object-cover"
          src={profileImgSrc}
          alt="profile"
        />
        <div className="flex w-full flex-1 flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <span className="font-bold">{nickname}</span>
              <span className="text-[13px] text-gray-2">{date}</span>
            </div>
            <SelectButton selectPopup={<ReplySelectPopup replyId={replyId} memberId={memberId} />} />
          </div>
          {mode === 'view' && <p className="text-sm">{content}</p>}
          {mode === 'modify' && (
            <ModifyInput
              onCancelClick={cancelModify}
              onConfirmClick={confirmModify}
            />
          )}
        </div>
      </div>
    </FormProvider>
  );
}

Reply.Skeleton = CommentSkeleton;

export default Reply;