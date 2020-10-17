/* eslint-disable react/display-name */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuthentication = (Component?: any) => {
  return ({ ...props }) => {
    const router = useRouter();
    const value = true;
    useEffect(() => {
      if (!value) router.push('/signIn');
    }, []);

    return <Component {...props} />;
  };
};

export default withAuthentication;
