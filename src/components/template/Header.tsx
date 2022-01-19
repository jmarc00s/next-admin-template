import React from 'react';
import useAppData from '../../data/hook/useAppData';
import ChangeThemeButton from '../ChangeThemeButton';
import Title from './Title';

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  const { theme, changeTheme } = useAppData();

  return (
    <div className="flex">
      <Title title={title} subTitle={subTitle} />
      <div className="flex flex-1 justify-end">
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Header;
