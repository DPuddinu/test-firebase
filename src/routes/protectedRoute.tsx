import { UserContext } from '@/components/ui/userProvider';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
