import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const HeaderFooterExceptPageList = ['/login'];
  const { pathname } = useLocation();

  const headerFooterView = HeaderFooterExceptPageList.map(
    (path) => !pathname.startsWith(path),
  ).some((value) => value === true);

  return (
    <>
      {headerFooterView && <Header />}
      <main className="min-h-screen w-screen overflow-x-hidden  ">
        {children}
      </main>
      {headerFooterView && <Footer />}
    </>
  );
}

export default Layout;
