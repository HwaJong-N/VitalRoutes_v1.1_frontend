interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function Card({ imgSrc, title, desc }: Props) {
  return (
    <div className="flex w-[300px] flex-col items-center gap-[32px] xl:w-[320px] xl:gap-[62px] ">
      <img src={imgSrc} alt="registration_img" />
      <div className="flex flex-col items-center gap-2 xl:gap-[21px]">
        <div className=" hidden h-[24px] w-[24px] rounded-full bg-gray-5 xl:block" />
        <h1 className="text-center text-base font-bold leading-[140%] xl:text-[26px]">
          {title}
        </h1>
        <div className="text-center text-sm font-medium text-gray-2 xl:text-[18px]">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Card;
