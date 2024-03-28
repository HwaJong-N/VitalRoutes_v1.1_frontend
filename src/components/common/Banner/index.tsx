import { twMerge } from 'tailwind-merge';
import { MoreInfo } from '@/types';
import BannerMoreInfo from './BannerMoreInfo';
import Icon from '@/components/icons.tsx';

interface Props {
  className?: string;
  title?: string;
  subTitle?: string;
  imgSrc?: string;
  region? : string;
  moreInfo?: MoreInfo;
}
function Banner({ className = '', title, subTitle, imgSrc, region, moreInfo }: Props) {
  const TITLE_CLASS = {
    h1: 'text-[32px] xl:text-[70px] font-bold leading-[120%] text-gray-11 uppercase whitespace-pre-wrap',
    h2: 'text-[14px] xl:text-[40px] leading-[64px] font-bold text-gray-11 uppercase',
  };
  return (
    <div
      className={twMerge(
        'relative h-[520px] w-full bg-gradient-to-r from-black/[0.12] to-black/0 xl:h-[1080px] ',
        className,
      )}
    >
      {imgSrc && (
        <img
          className="absolute -z-10 h-full w-full object-cover"
          src={imgSrc}
          alt="banner"
        />
      )}

      <div className="relative mx-auto h-full xl:w-[1000px]">
        {title && subTitle && (
          <div className="absolute left-[21px] top-[175px] xl:left-0 xl:top-[420px]">
            {region && (
              <div className='flex items-center rounded-full font-bold px-4 py-2 bg-white text-[16px] max-w-[calc(100%-470px)] mb-3'>
                <Icon.Location className="mr-2 h-6 w-6" />
                <span className="align-middle">{region}</span>
              </div>
            )}
            <h1 className={TITLE_CLASS.h1}>{title}</h1>
            <h2 className={twMerge(TITLE_CLASS.h2, 'mt-[16px]')}>{subTitle}</h2>
          </div>
        )}
        {moreInfo && (
          <BannerMoreInfo
            className="absolute bottom-[24px] w-full px-[25px] xl:bottom-[182px] xl:p-0"
            challengeId={moreInfo.challengeId}
            profileImge={moreInfo.profileImge}
            nickname={moreInfo.nickname}
            view={moreInfo.view}
            comment={moreInfo.comment}
            like={moreInfo.like}
            likeFlag={moreInfo.likeFlag}
            bookmarkFlag={moreInfo.bookmarkFlag}
          />
        )}
      </div>
    </div>
  );
}

export default Banner;
