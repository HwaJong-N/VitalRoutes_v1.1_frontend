import { FormProvider, useForm } from 'react-hook-form';
import { ReplyWrite } from '@/types/challenge';
import useReplyWriteMutation from '@/hooks/challenge/useReplyWirteMutation.ts';
import { useEffect } from 'react';
import Input from '@/components/common/Input.tsx';
import Button from '@/components/common/Button.tsx';

interface Props {
  pId: number;
  viewState: boolean;
  onViewRepliesChange: (participationId: number) => void;
}

function ReplyEditorBox({ pId, viewState, onViewRepliesChange }: Props) {
  const methods = useForm<ReplyWrite>();
  const { register, getValues, handleSubmit, reset } = methods;
  const { mutate, isPending, isSuccess } = useReplyWriteMutation();
  const replyRegister = register('comment', { required: true });

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);


  const writeReply = async () => {
    const { comment } = getValues();
    const saveData = {
      participationId: pId,
      content: comment
    }
    await mutate(saveData);

    if (!viewState) {
      onViewRepliesChange(pId); // 대댓글이 작성된 후 댓글을 보여지게 처리
    }
  }


  return (
    <form className="flex w-full flex-col gap-[56px]" onSubmit={handleSubmit(writeReply)}>
      <FormProvider {...methods}>
        <Input
          {...replyRegister}
          placeholder="Add a comment"
          autoComplete="off"
          button={
            <Button disabled={isPending} type="submit" variant="third-b">
              Post
            </Button>
          }
        />
      </FormProvider>
    </form>
  );
}

export default ReplyEditorBox;