import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function NavButton({ className, href, children, onClick }: Props) {
  return (
    <Link
      className={twMerge(
        'text-xl font-bold text-white hover:text-green-1 xl:hover:underline',
        className,
      )}
      to={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default NavButton;
