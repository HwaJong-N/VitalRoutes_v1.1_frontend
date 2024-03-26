import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import 'swiper/css/pagination';
import PageBar from './PageBar';
import SpotSlideSkeleton from './SpotSlideSkeleton';

interface Props {
  images: string[];
}

function SpotSlide({ images }: Props) {
  const totalPage = images.length;
  const [page, setPage] = useState(0);

  const onSlideChange = (swiper: SwiperClass) => {
    setPage(swiper.activeIndex);
  };

  return (
    <div className="relative flex flex-col gap-[32px] rounded-[30px]">
      <Swiper
        className="relative h-full w-full"
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={onSlideChange}
      >
        {images.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <img
              className="h-[377px] w-[940px] rounded-[30px] object-cover"
              key={imgSrc}
              src={imgSrc}
              alt="spot"
            />
          </SwiperSlide>
        ))}
        <span className="absolute bottom-[14px] left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-full bg-black/45 px-[10px] py-[4px] text-[13px] leading-[150%] text-gray-11">
          Spot {page + 1}/{totalPage}
        </span>
      </Swiper>

      <PageBar totalPage={totalPage} activePage={page} />
    </div>
  );
}

SpotSlide.Skeleton = SpotSlideSkeleton;

export default SpotSlide;
