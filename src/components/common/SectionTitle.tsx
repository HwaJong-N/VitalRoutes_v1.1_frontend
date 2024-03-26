import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import Icon from '@/components/icons';

interface Props {
  title: string;
  subTitle: string;
  href?: string;
  className?: string;
}

function SectionTitle({ title, subTitle, href, className }: Props) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <h3 className="text-center text-sm font-bold uppercase leading-[150%] text-gray-4 xl:text-lg">
        {subTitle}
      </h3>
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-center text-xl font-bold leading-[140%] xl:text-[42px]">
          {title}
        </h1>
        {href && (
          <Button
            variant="third-d"
            className="flex h-[30px] w-[30px] items-center justify-center p-0 xl:h-[48px] xl:w-[48px] xl:p-0"
            onClick={() => navigate(href)}
          >
            <Icon.RightArrow className="size-[23px]" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default SectionTitle;
