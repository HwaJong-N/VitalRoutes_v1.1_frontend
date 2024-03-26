import { useId, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Banner from '@/components/common/Banner';
import Button from '@/components/common/Button';
import useFilePreview from '@/hooks/useFilePreview';
import { getImageUrl } from '@/utils/getImageUrl';
import { ChallengeRegisterationForm } from '@/types/posts';

function BannerInput() {
  const fileInputId = useId();
  const fileInputRef = useRef<HTMLLabelElement>(null);
  const { register, watch } = useFormContext<ChallengeRegisterationForm>();
  const titleImg = watch('titleImg');
  const { previewSrc } = useFilePreview(titleImg);

  const uploadFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <Banner imgSrc={previewSrc} />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[52px]">
        <img
          className={previewSrc && 'invisible'}
          src={getImageUrl('picture/img_upload.png')}
          alt="img upload"
        />
        <Button variant="third-e" onClick={uploadFile}>
          대표사진 등록
        </Button>
        <label ref={fileInputRef} htmlFor={fileInputId} aria-label="label">
          <input
            {...register('titleImg', {
              required: '대표 사진을 등록해주세요.',
            })}
            id={fileInputId}
            type="file"
            hidden
          />
        </label>
      </div>
    </div>
  );
}

export default BannerInput;
