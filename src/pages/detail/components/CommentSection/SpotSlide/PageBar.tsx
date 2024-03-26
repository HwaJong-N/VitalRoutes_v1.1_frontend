interface Props {
  activePage: number;
  totalPage: number;
}

function PageBar({ activePage, totalPage }: Props) {
  const INACTIVE = 'rounded-full w-[10px] h-[10px] bg-gray-3 transition-all';
  const ACTIVE = 'rounded-full w-[32px] h-[10px] bg-gray-1 transition-all';

  const totalPageList = Array.from(
    { length: totalPage },
    (_, index) => index + 1,
  );

  return (
    <div className="flex justify-center gap-[6px]">
      {totalPageList.map((page) => (
        <div
          key={page}
          className={`${page === activePage + 1 ? ACTIVE : INACTIVE}`}
        />
      ))}
    </div>
  );
}

export default PageBar;
