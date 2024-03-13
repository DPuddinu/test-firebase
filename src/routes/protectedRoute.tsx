import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return () => {
      listener();
    };
  }, []);

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
