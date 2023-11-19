import { ReactElement } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '@/pages/main-page';

import { LoginPage } from './pages/login-page';

const routes = (
  <Route>
    <Route path="/" element={<MainPage />} />
    <Route path="login" element={<LoginPage />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export { App };
