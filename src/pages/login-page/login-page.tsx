import classnames from 'classnames';
import { ReactElement, useState } from 'react';

import lockClosedIcon from '@/assets/icons/lock-closed.png';
import lockOpenIcon from '@/assets/icons/lock-open.png';
import userBigIcon from '@/assets/icons/user-big.png';
import userSmallIcon from '@/assets/icons/user-small.png';

import styles from './login-page.module.scss';

function LoginPage(): ReactElement {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={styles.page}>
      <form className={styles.form}>
        <img className={styles.bigIcon} src={userBigIcon} alt="" />
        <div className={styles.inputbox}>
          <img className={styles.smallIcon} src={userSmallIcon} alt="" />
          <input className={styles.input} type="email" placeholder="Your email" />
        </div>
        <div className={styles.inputbox}>
          <img
            className={classnames(styles.smallIcon, styles.lockIcon)}
            src={showPassword ? lockOpenIcon : lockClosedIcon}
            onClick={() => setShowPassword(!showPassword)}
            alt=""
          />
          <input className={styles.input} type={showPassword ? 'text' : 'password'} placeholder="Your password" />
        </div>
        <button className={styles.submitButton} type="submit">
          login
        </button>
      </form>
    </main>
  );
}

export { LoginPage };
