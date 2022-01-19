import { useRouter } from 'next/router';
import React from 'react';
import useAppData from '../../data/hook/useAppData';
import useAuth from '../../data/hook/useAuth';
import LoadingScreen from '../LoadingScreen';
import Content from './Content';
import Header from './Header';
import Menu from './menu/Menu';

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

const Layout = ({ title, subTitle, children }: LayoutProps) => {
  const { theme } = useAppData();
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!loading && user) {
    return (
      <main className={`flex h-screen w-screen ${theme}`}>
        <Menu />
        <div className="flex flex-col flex-1 bg-gray-300 p-7 dark:bg-gray-800">
          <Header title={title} subTitle={subTitle} />
          <Content>{children}</Content>
        </div>
      </main>
    );
  }

  return null;
};

export default Layout;
