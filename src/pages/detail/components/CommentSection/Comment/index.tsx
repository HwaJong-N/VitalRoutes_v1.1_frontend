import { FormProvider, useForm } from 'react-hook-form';
import CommentSkeleton from './CommentSkeleton';
import SelectButton from '@/components/units/Select';
import CommentSelectPopup from './CommentSelectPopup';
import ModifyInput from './ModifyInput';
import useCommentModifyMutation from '@/hooks/challenge/useCommentModifyMutation';
import { storeFamilyCommentMode } from '@/store/challenge/commentStore';

interface Props {
  profileImgSrc: string;
  nickname: string;
  content: string;
  date: string;
  id: number;
  participationImages: { sequence: number; fileName: string }[];
}

function Comment({
  id,
  profileImgSrc,
  nickname,
  content,
  date,
  participationImages,
}: Props) {
  const useCommentModeStore = storeFamilyCommentMode(id);
  const { mode, setMode } = useCommentModeStore();
  const { mutate: mutateModify } = useCommentModifyMutation(id);
  const methods = useForm({
    defaultValues: {
      comment: content,
    },
  });

  const confirmModify = () => {
    const comment = methods.getValues('comment');
    mutateModify({ content: comment, uploadedFiles: participationImages });
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
            <SelectButton selectPopup={<CommentSelectPopup id={id} />} />
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

Comment.Skeleton = CommentSkeleton;

export default Comment;
