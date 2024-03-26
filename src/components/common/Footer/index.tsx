import Button from '../Button';
import useWindowSize from '@/hooks/useWindowSize';
import { TABLET_BOUND_WIDTH } from '@/constants/responsive';
import Icon from '@/components/icons';
import { getImageUrl } from '@/utils/getImageUrl';

function Footer() {
  const SPAN_CLASS = 'text-gray-1 text-sm hover:cursor-pointer hover:underline';

  const { width } = useWindowSize();
  const isDesktop = width > TABLET_BOUND_WIDTH;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className=" bg-gray-6 px-[21px] pb-16 pt-8">
      <div className="mx-auto flex max-w-[1200px] justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start justify-between gap-[20px] xl:flex-row xl:items-end xl:gap-[40.5px]">
            <img
              width={155}
              src={getImageUrl('logo/main_logo_black.png')}
              alt="logo"
            />
            <div className="flex flex-col gap-2 text-[14px] xl:flex-row xl:items-center xl:justify-between xl:gap-4">
              <span className={SPAN_CLASS}>서비스 이용약관</span>
              {isDesktop && <Icon.VrLine className="fill-gray-1" />}
              <span className={SPAN_CLASS}>개인정보 처리방침</span>
              {isDesktop && <Icon.VrLine className="fill-gray-1" />}
              <span className={SPAN_CLASS}>위치기반 서비스</span>
            </div>
          </div>

          <div className="grid-row text-[13px] font-normal text-gray-2 xl:text-sm">
            Copyright © 2024 VitalRouts Co., Ltd. All rights reserved.
          </div>
        </div>
        <Button
          variant="third-e"
          className="flex h-10 w-10 items-center justify-center p-0 xl:p-0"
          onClick={scrollToTop}
        >
          <Icon.UpArrow />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
