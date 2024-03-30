import { FormProvider, useForm } from 'react-hook-form';
import { ReplyWrite } from '@/types/challenge';
import useReplyWriteMutation from '@/hooks/challenge/useReplyWirteMutation.ts';
import { useEffect } from 'react';
import Input from '@/components/common/Input.tsx';
import Button from '@/components/common/Button.tsx';

interface Props {
  pId: number;
}

function ReplyEditorBox({pId} : Props) {
  const methods = useForm<ReplyWrite>();
  const { register, getValues, handleSubmit, reset } = methods;
  const { mutate, isPending, isSuccess } = useReplyWriteMutation();
  const replyRegister = register('comment', { required: true });

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);


  const writeReply = () => {
    const {comment} = getValues();
    const saveData = {
      participationId: pId,
      content: comment
    }
    mutate(saveData);
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