import { createBrowserRouter } from 'react-router';
import Home from './Pages/Home';
import MainLayout from '../layout/MainLayout';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import PhoneDetails from './Pages/PhoneDetails';
import ErrorPage from './Pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favorites',
        Component: Favorites,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/phone-details',
        element: <PhoneDetails />
      },
    ],
  },
]);
