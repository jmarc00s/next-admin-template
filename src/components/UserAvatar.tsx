import React from 'react';
import Link from 'next/link';
import useAuth from '../data/hook/useAuth';
import Image from 'next/image';

const UserAvatar = () => {
  const { user } = useAuth();

  return (
    <Link href="/profile" passHref>
      <div className="ml-3 h-9 w-9 relative">
        <Image
          src={user?.imageUrl ?? '/images/avatar.svg'}
          alt="User image"
          className={` rounded-full cursor-pointer`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Link>
  );
};

export default UserAvatar;
