import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';
import Spot from '@/components/common/Spot';
import Icon from '@/components/icons';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  spotKey: string;
  previewImgSrc?: string;
}

function SpotFileInput(
  { spotKey, previewImgSrc, ...props }: FileInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div key={spotKey} className="flex flex-col items-center gap-[16px]">
      <Spot label={spotKey} />
      <label
        className="flex h-[121px] w-[175px] cursor-pointer items-center justify-center overflow-hidden rounded-[16px] bg-gray-3"
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
          ref={ref}
          type="file"
          aria-label="file input"
          id={id}
          {...props}
          hidden
        />
      </label>
    </div>
  );
}

export default forwardRef(SpotFileInput);
