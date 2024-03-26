import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize from '@/hooks/useWindowSize';
import { TABLET_BOUND_WIDTH } from '@/constants/responsive';
import { NAVIGATION_NEW } from '@/constants/navigation';
import Button from '../Button';
import HambergerNavigation from './HambergerNavigation';
import NavButton from './common/NavButton';
import { getImageUrl } from '@/utils/getImageUrl';
import { useLoginStore } from '@/store/user/loginInfoStore';

function Header() {
  const { isLogin, logout } = useLoginStore();
  const navigationList = Object.values(NAVIGATION_NEW);
  const { width } = useWindowSize();
  const [hambergerNavigationVisible, setHambergerNavigationVisible] =
    useState(false);
  const isDesktop = width ? width > TABLET_BOUND_WIDTH : false;

  const location = useLocation();
  useEffect(() => {
    setHambergerNavigationVisible(false);
  }, [location]);

  return (
    <>
      {hambergerNavigationVisible && <HambergerNavigation />}
      <header className="fixed left-1/2 top-[30px] z-header flex h-[58px] w-[95%] -translate-x-1/2 items-center justify-between rounded-[12px] bg-gray-1/30 px-5 backdrop-blur xl:h-[106px] xl:rounded-[20px]">
        <Link to="/">
          <img
            width={isDesktop ? 'auto' : 141}
            src={getImageUrl('logo/main_logo_white.png')}
            alt="logo"
          />
        </Link>
        {isDesktop ? (
          <>
            <nav className="flex gap-5">
              {navigationList.map(({ href, title }) => (
                <NavButton key={title} href={href}>
                  {title}
                </NavButton>
              ))}
            </nav>
            {isLogin ? (
              <Button onClick={logout} variant="third-a">
                Logout
              </Button>
            ) : (
              <Link to="login">
                <Button variant="third-a">Login</Button>
              </Link>
            )}
          </>
        ) : (
          <Button
            variant="third-a"
            onClick={() => setHambergerNavigationVisible((cur) => !cur)}
          >
            Menu
          </Button>
        )}
      </header>
    </>
  );
}

export default Header;
