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
  const { register, getValues, reset } = methods;
  const { mutate, isPending, isSuccess } = useReplyWriteMutation();
  const replyRegister = register('content', { required: true });

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);


  const writeReply = () => {
    const saveData = {
      participationId: pId,
      content: getValues('content'),
    }
    mutate(saveData);
  }


  return (
    <form className="flex w-full flex-col gap-[56px]">
      <FormProvider {...methods}>
        <Input
          {...replyRegister}
          placeholder="Add a comment"
          autoComplete="off"
          button={
            <Button disabled={isPending} type="submit" variant="third-b" onClick={writeReply}>
              Post
            </Button>
          }
        />
      </FormProvider>
    </form>
  );
}

export default ReplyEditorBox;