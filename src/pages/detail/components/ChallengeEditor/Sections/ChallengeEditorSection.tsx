import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import { ChallengeUpdateForm } from '@/types/posts';
import { useEffect } from 'react';

interface Props {
  title: string;
  content: string;
}

function ChallengeEditorSection({ title, content }: Props) {
  const { register } = useFormContext<ChallengeUpdateForm>();

  useEffect(() => {
    register('title', { value: title }); // title 등록
    register('content', { value: content }); // content 등록
  }, [register, title, content]);

  return (
    <>
      <Input
        label="제목을 입력해주세요."
        placeholder="제목은 24자 이내로 작성해주세요."
        defaultValue={title} // title을 기본값으로 설정
        {...register('title', { required: '제목을 입력해주세요.' })}
      />
      <Textarea
        label="게시글에 등록할 글을 적어주세요."
        placeholder="게시글 내용을 2000자 이내로 작성해주세요."
        defaultValue={content} // content를 기본값으로 설정
        {...register('content', { required: '내용을 입력해주세요.' })}
      />
    </>
  );
}


export default ChallengeEditorSection;
