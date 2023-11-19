import { FormEvent, ReactElement, useState } from 'react';

import userIcon from '@/assets/icons/user-big.png';

import { EmailInput } from './components/email-input';
import { PasswordInput } from './components/password-input';
import styles from './login-page.module.scss';

function LoginPage(): ReactElement {
  const [isEmailAccepted, setIsEmailAccepted] = useState(false);
  const [isPasswordAccepted, setIsPasswordAccepted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!isEmailAccepted || !isPasswordAccepted) {
      return;
    }
    alert('You are logged in!');
  }

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.userIcon} src={userIcon} alt="" width={128} height={128} />
        <EmailInput isEmailAccepted={isEmailAccepted} setIsEmailAccepted={setIsEmailAccepted} />
        <PasswordInput isPasswordAccepted={isPasswordAccepted} setIsPasswordAccepted={setIsPasswordAccepted} />
        <button className={styles.submitButton} type="submit" disabled={!isEmailAccepted || !isPasswordAccepted}>
          login
        </button>
      </form>
    </main>
  );
}

export { LoginPage };
