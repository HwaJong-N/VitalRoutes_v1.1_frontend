import Button from '@/components/common/Button';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function TagSection() {
  const { data: challenge } = useChallengeDetail();

  return (
    <section className="flex w-full flex-col gap-[32px]">
      <h1 className="text-2xl font-semibold leading-[150%]">산책길 태그</h1>
      <div className="flex flex-wrap gap-2">
        {challenge?.tagList.map((tag) => (
          <Button key={tag} variant="tag-a">
            {tag}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default TagSection;
