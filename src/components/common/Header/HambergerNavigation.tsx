import { NAVIGATION_NEW } from '@/constants/navigation';
import NavButton from './common/NavButton';
import { useLoginStore } from '@/store/user/loginInfoStore';

function HambergerNavigation() {
  const { isLogin, logout } = useLoginStore();
  const navigationList = Object.values(NAVIGATION_NEW);

  return (
    <div className="fixed left-0 top-0 z-header flex h-screen w-screen items-center justify-center bg-gray-1 xl:hidden">
      <nav className="flex flex-col items-center gap-[16px]">
        {navigationList.map(({ href, title }) => (
          <NavButton
            key={title}
            className="text-[32px] leading-[120%]"
            href={href}
          >
            {title}
          </NavButton>
        ))}
        {isLogin ? (
          <NavButton onClick={logout} className="mt-[46px] text-base" href="#">
            LOGOUT
          </NavButton>
        ) : (
          <NavButton className="mt-[46px] text-base" href="login">
            LOGIN
          </NavButton>
        )}
      </nav>
    </div>
  );
}

export default HambergerNavigation;
