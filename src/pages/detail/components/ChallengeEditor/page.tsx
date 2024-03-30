import useChallengeDetail from '@/hooks/challenge/useChallengeDetail.ts';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@/components/common/Button.tsx';
import { ChallengeUpdateForm } from '@/types/posts.ts';
import useChallengeModifyMutation from '@/hooks/challenge/useChallengeModifyMutation.ts';
import ChallengeEditorSection from '@/pages/detail/components/ChallengeEditor/Sections/ChallengeEditorSection.tsx';
import ChallengeTransportSection from '@/pages/detail/components/ChallengeEditor/Sections/ChallengeTransportSection.tsx';
import ChallengeTagSection from '@/pages/detail/components/ChallengeEditor/Sections/ChallengeTagSection.tsx';
import { useNavigate } from 'react-router-dom';

function ChallengeEditPage() {
  const navigate = useNavigate();
  const { data: challenge } = useChallengeDetail();
  const methods = useForm<ChallengeUpdateForm>({
    defaultValues: {
      title: challenge?.title ?? '',
      content: challenge?.content ?? '',
      type: challenge?.type ?? undefined,
      tags: challenge?.tagList ?? [],
    }
  });
  const { mutate, isPending } = useChallengeModifyMutation(challenge?.challengeId || -1);

  const modifyChallenge = () => {
    const updatedData = methods.getValues();
    mutate(updatedData);
    navigate(`/challenge/${challenge?.challengeId}`);
  }

  return (
    <form>
      <FormProvider {...methods}>
        <div className="mx-auto my-[160px] flex max-w-[940px] flex-col gap-[62px] px-[21px]">
          {challenge && (
            <>
              <ChallengeEditorSection title={challenge.title} content={challenge.content}/>
              <ChallengeTransportSection type={challenge.type} />
              <ChallengeTagSection />
              <Button type="submit" disabled={isPending} onClick={modifyChallenge}>
                수정하기
              </Button>
            </>
          )}
        </div>
      </FormProvider>
    </form>
  );
}

export default ChallengeEditPage;