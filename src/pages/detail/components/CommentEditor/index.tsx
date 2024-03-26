import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import SpotFileInput from './SpotFileInput';
import { CommentForm, SpotKey } from '@/types/posts';
import useCommentWriteMutation from '@/hooks/challenge/useCommentWriteMutation';

function CommentEditor() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const methods = useForm<CommentForm>();
  const SPOTS: Array<SpotKey> = ['spot1', 'spot2', 'spot3', 'spot4', 'spot5'];
  const { register, getValues, handleSubmit, reset } = methods;
  const { mutate, isPending, isSuccess } = useCommentWriteMutation(
    params.id || '0',
  );

  const commentRegister = register('comment', { required: true });

  const onValid = () => {
    const { comment, spot1, spot2, spot3, spot4, spot5 } = getValues();
    const files = [spot1, spot2, spot3, spot4, spot5]
      .map((spot) => {
        const file = spot.item(0);
        return file;
      })
      .filter((file): file is File => file !== null);

    const reqeustData = {
      content: comment,
      files,
    };
    mutate(reqeustData);
  };

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex w-full flex-col gap-[56px]"
    >
      <FormProvider {...methods}>
        <Input
          {...commentRegister}
          placeholder="Add a comment"
          autoComplete="off"
          button={
            <Button disabled={isPending} type="submit" variant="third-b">
              Post
            </Button>
          }
        />
        <motion.div ref={constraintsRef} className="w-full">
          <motion.div
            dragConstraints={constraintsRef}
            drag="x"
            className="flex w-max  justify-between gap-[16px] xl:w-full xl:gap-0"
          >
            {SPOTS.map((spotIdx) => {
              const previewFile = methods.watch(spotIdx)?.item(0);
              const previewImgSrc = previewFile
                ? URL.createObjectURL(previewFile)
                : undefined;
              return (
                <SpotFileInput
                  key={spotIdx}
                  spotIdx={spotIdx}
                  previewImgSrc={previewImgSrc}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </FormProvider>
    </form>
  );
}

export default CommentEditor;
