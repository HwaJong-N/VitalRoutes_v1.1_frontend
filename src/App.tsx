import { Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from '@/components/units/Layout';
import QueryProvider from '@/app/QueryProvider';
import PopupContainer from './app/PopupContainer';
import AxiosSetting from './app/AxiosSetting';

function App() {
  return (
    <QueryProvider>
      <PopupContainer />
      <AxiosSetting />
      <ScrollRestoration />
      <Layout>
        <Outlet />
      </Layout>
    </QueryProvider>
  );
}

export default App;
