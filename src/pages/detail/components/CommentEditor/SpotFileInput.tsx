import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import Spot from '@/components/common/Spot';
import Icon from '@/components/icons';
import { CommentForm, SpotKey } from '@/types/posts';

interface FileInputProps {
  spotIdx: SpotKey;
  previewImgSrc?: string;
}

function SpotFileInput({ spotIdx, previewImgSrc }: FileInputProps) {
  const { register } = useFormContext<CommentForm>();
  const id = useId();

  return (
    <div key={spotIdx} className="flex flex-col items-center gap-[16px]">
      <Spot label={spotIdx} />
      <label
        className="flex h-[121px] w-[175px] items-center justify-center overflow-hidden rounded-[16px] bg-gray-3"
        htmlFor={id}
      >
        {previewImgSrc ? (
          <img
            className="object-cover"
            src={previewImgSrc}
            alt="spot preview"
          />
        ) : (
          <Icon.Camera width={44} height={44} fill="white" />
        )}
        <input
          {...register(spotIdx)}
          type="file"
          aria-label="file input"
          id={id}
          hidden
        />
      </label>
    </div>
  );
}

export default SpotFileInput;
