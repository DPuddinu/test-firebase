import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root';
import Dashboard from '../pages/dashboard';
import ProtectedRoute from './protectedRoute';
import LoginPage from '@/pages/login';
import HomePage from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute />,
        children: [
          {
            path: '',
            element: <Dashboard />
          }
        ]
      }
    ]
  }
]);
