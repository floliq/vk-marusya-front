import { Navigate, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '@/entities/session';

type RequireAuthProps = {
  children: React.ReactNode;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { data: profile, isLoading, isUninitialized } = useGetProfileQuery();
  const location = useLocation();

  const stillChecking = isUninitialized || isLoading;

  if (stillChecking) {
    return null;
  }

  if (!profile) {
    return <Navigate to='/' state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};
