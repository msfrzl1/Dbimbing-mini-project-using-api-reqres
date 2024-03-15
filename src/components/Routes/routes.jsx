import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import UsersPage from '../../pages/users';

export const routelist = [
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/home',
      element: <HomePage />,
   },
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
   {
      path: '/users',
      element: <UsersPage />,
   },
];
