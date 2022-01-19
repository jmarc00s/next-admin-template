import React from 'react';
import useAppData from '../../data/hook/useAppData';
import ChangeThemeButton from '../ChangeThemeButton';
import UserAvatar from '../UserAvatar';
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
      <div className="flex flex-1 justify-end items-center">
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
