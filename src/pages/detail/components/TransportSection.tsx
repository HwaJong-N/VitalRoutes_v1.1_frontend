import useChallengeDetail from '@/hooks/challenge/useChallengeDetail.ts';
import Button from '@/components/common/Button.tsx';

function TransportSection() {
  const { data: challenge } = useChallengeDetail();

  return (
    <section className="flex w-full flex-col gap-[32px]">
      <h1 className="text-2xl font-semibold leading-[150%]">이동 방법</h1>
      <div className="flex flex-wrap gap-2">
          <Button key={challenge?.type} variant="tag-a">
            {challenge?.type}
          </Button>
      </div>
    </section>
  );
}

export default TransportSection;