import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './main-page.module.scss';

function MainPage(): ReactElement {
  const [isUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/login');
    }
  }, []);

  return <main className={styles.page}>Our awesome main page</main>;
}

export { MainPage };
