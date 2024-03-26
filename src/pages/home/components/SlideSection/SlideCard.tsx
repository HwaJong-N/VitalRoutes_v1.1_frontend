interface Props {
  imgSrc: string;
}

function SlideCard({ imgSrc }: Props) {
  return (
    <div className="h-auto w-[268px] shrink-0 rounded-[30px] xl:w-[403px]">
      <img src={imgSrc} alt="slide" />
      {/* <div className="text-7xl">{title}</div>
      <div>{people}명이 참가중</div> */}
    </div>
  );
}

export default SlideCard;
