import { useUserStore } from '@/store/store';
import { PropsWithChildren, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user } = useUserStore();
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
