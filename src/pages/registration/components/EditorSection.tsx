import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import { ChallengeRegisterationForm } from '@/types/posts';

function EditorSection() {
  const { register } = useFormContext<ChallengeRegisterationForm>();

  return (
    <>
      <Input
        label="제목을 입력해주세요."
        placeholder="제목은 24자 이내로 작성해주세요."
        {...register('title', { required: '제목을 입력해주세요.' })}
      />
      <Textarea
        label="게시글에 등록할 글을 적어주세요."
        placeholder="게시글 내용을 2000자 이내로 작성해주세요."
        {...register('contents', { required: '내용을 입력해주세요.' })}
      />
    </>
  );
}

export default EditorSection;
