import { ReactElement, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '@/components/app';

import styles from './main-page.module.scss';

function MainPage(): ReactElement {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/login');
    }
  }, []);

  return <main className={styles.page}>Our awesome main page</main>;
}

export { MainPage };
