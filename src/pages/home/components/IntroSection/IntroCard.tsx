interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function IntroCard({ imgSrc, title, desc }: Props) {
  return (
    <div className="flex w-[318px] flex-col items-center gap-[24px] xl:w-[480px] xl:gap-[80px]">
      <img className="w-[318px] xl:w-auto" src={imgSrc} alt="intro card" />
      <div>
        <h1 className="mb-2 text-center text-base font-bold leading-[150%] xl:mb-4 xl:text-[32px]">
          {title}
        </h1>
        <p className="break-keep px-12 text-center text-sm leading-[160%] xl:text-[20px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default IntroCard;
