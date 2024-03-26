import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import BannerInput from './components/BannerInput';
import EditorSection from './components/EditorSection';
import MapSection from './components/MapSection';
import TagSection from './components/TagSection';
import TransportSection from './components/TransportSection';
import { ChallengeRegisterationForm, Spot } from '@/types/posts';
import Button from '@/components/common/Button';
import useChallengeWriteMutation from '@/hooks/challenge/useChallengeWriteMutation';
import useOnInvalid from './components/model/useOnInvalid';

function RegistrationPage() {
  const onInvalid = useOnInvalid();
  const methods = useForm<ChallengeRegisterationForm>({
    defaultValues: {
      spots: [
        { files: undefined },
        { files: undefined },
        { files: undefined },
        { files: undefined },
        { files: undefined },
      ],
    },
  });

  const { handleSubmit } = methods;
  const { mutate, isPending } = useChallengeWriteMutation();

  const onValid: SubmitHandler<ChallengeRegisterationForm> = (data) => {
    const {
      title,
      contents,
      titleImg: titleImageList,
      spots,
      type,
      tags,
    } = data;

    const titleImage = titleImageList.item(0);

    const filteredSpots = [
      spots.at(0),
      spots.at(1),
      spots.at(2),
      spots.at(3),
      spots.at(4),
    ].filter((spot): spot is Spot => spot?.files?.item(0) !== null);

    const registerFiles = filteredSpots.map(spot => spot?.files?.[0]).filter(file => file) as File[];

    const transformedTags = tags.filter((tag): tag is string => tag !== false);

    if (
      !titleImage ||
      filteredSpots.length < 2
    ) {
      return;
    }
    mutate({
      title,
      content: contents,
      type,
      titleImg: titleImage,
      tags: transformedTags,
      files: registerFiles
    });
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <FormProvider {...methods}>
        <BannerInput />
        <div className="mx-auto my-[120px] flex max-w-[940px] flex-col gap-[62px] px-[21px]">
          <EditorSection />
          <TransportSection />
          <TagSection />
          <MapSection />
          <Button type="submit" disabled={isPending}>
            등록하기
          </Button>
        </div>
      </FormProvider>
    </form>
  );
}

export default RegistrationPage;
