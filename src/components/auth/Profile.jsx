import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButon';
import LogoutButton from './LogoutButton';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Ачаалж байна ...</div>;
  }

  return isAuthenticated ? (
    <>
      <li>
        <img width={40} src={user.picture} alt={user.name} />
      </li>
      <li>
        <LogoutButton />
      </li>
    </>
  ) : (
    <li>
      <LoginButton />
    </li>
  );
};

export default Profile;
