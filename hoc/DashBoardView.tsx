/* eslint-disable react/display-name */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserDashboard } from '../components/pages';

const DashBoardView = (Component?: any) => {
  return ({ ...props }) => {
    const router = useRouter();
    const [role, setrole] = useState('');
    const value = true;
    useEffect(() => {
      if (!value) router.push('/signIn');
      setrole('Admin');
    }, []);

    switch (role) {
      case 'Admin':
        return <UserDashboard />;
      default:
        break;
    }
    return <Component {...props} />;
  };
};

export default DashBoardView;
