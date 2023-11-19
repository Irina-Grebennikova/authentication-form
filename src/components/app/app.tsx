import { ReactElement, useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { AppContext } from '@/components/app';
import { MainPage } from '@/pages/main-page';

import { LoginPage } from '../../pages/login-page';

const routes = (
  <Route>
    <Route path="/" element={<MainPage />} />
    <Route path="login" element={<LoginPage />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

function App(): ReactElement {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export { App };
