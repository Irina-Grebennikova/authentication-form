import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage(): ReactElement {
  const [isUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/login');
    }
  }, []);

  return <main>Our awesome main page</main>;
}

export { MainPage };
