import Icon from '@/components/icons';

interface Props {
  onClick?: () => void;
  title: string;
}

function MoreButton({ onClick, title }: Props) {
  return (
    <button
      type="button"
      className="mx-auto flex gap-[8px] font-bold leading-[150%] text-gray-3"
      onClick={onClick}
    >
      {title}
      <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-4 p-[3px]">
        <Icon.DownArrow fill="white" />
      </div>
    </button>
  );
}

export default MoreButton;
