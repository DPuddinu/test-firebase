import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Dashboard from '../pages/dashboard';
import ProtectedRoute from './protectedRoute';
import Login from '@/pages/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  },

  {
    path: 'dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        element: <Dashboard />
        // loader: redirectIfUser
      }
    ]
  }
]);
