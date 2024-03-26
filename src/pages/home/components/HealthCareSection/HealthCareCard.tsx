interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function HealthCareCard({ title, desc, imgSrc }: Props) {
  return (
    <div className="relative max-h-[278px] w-[318px] overflow-hidden rounded-[40px] bg-gradient-to-r from-black/60 to-black/0 px-[36px] py-[46px] xl:w-[433px]">
      <img
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        src={imgSrc}
        alt=""
      />
      <div className="relative z-10 flex w-[238px] flex-col gap-4  text-gray-11">
        <h1 className="line-clamp-2 break-keep text-[24px] font-bold leading-[140%] ">
          {title}
        </h1>
        <p className="hidden break-keep leading-[150%] xl:line-clamp-3 ">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default HealthCareCard;
