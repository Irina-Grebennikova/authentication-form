import { FormEvent, ReactElement, useState } from 'react';

import { authorizeUser, isUserExist } from '@/api';
import userIcon from '@/assets/icons/user-big.png';
import { Loader } from '@/components/loader';

import { EmailInput } from './components/email-input';
import { PasswordInput } from './components/password-input';
import styles from './login-page.module.scss';

function LoginPage(): ReactElement {
  const [isEmailAccepted, setIsEmailAccepted] = useState(false);
  const [isPasswordAccepted, setIsPasswordAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setIsSubmited(true);

    if (!isEmailAccepted || !isPasswordAccepted) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    void (async (): Promise<void> => {
      setIsLoading(() => true);
      const isUserInSystem = await isUserExist(email);
      if (!isUserInSystem) {
        alert('Wrong email or password');
      } else {
        await authorizeUser(email, password);
        alert('You are logged in!');
      }
      setIsLoading(() => false);
    })();
  }

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.userIcon} src={userIcon} alt="" width={128} height={128} />
        <EmailInput isEmailAccepted={isEmailAccepted} setIsEmailAccepted={setIsEmailAccepted} isSubmited={isSubmited} />
        <PasswordInput
          isPasswordAccepted={isPasswordAccepted}
          setIsPasswordAccepted={setIsPasswordAccepted}
          isSubmited={isSubmited}
        />
        <button className={styles.submitButton} type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : 'login'}
        </button>
      </form>
    </main>
  );
}

export { LoginPage };
