import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import RegisterPage from '../pages/AuthPages/RegisterPage';
import LoginPage from '../pages/AuthPages/LoginPage';
import NewsDetailsPage from '../pages/NewsDetailsPage/NewsDetailsPage';
import PrivateRoute from './PrivateRoute';

const publicRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className='flex justify-center items-center mx-auto h-screen'>
        <h3>Something here wrong.</h3>
      </div>
    ),
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/news-details/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
        element: (
          <PrivateRoute>
            <NewsDetailsPage></NewsDetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);
export default publicRoute;
