import classnames from 'classnames';
import { ReactElement, useState } from 'react';

import lockClosedIcon from '@/assets/icons/lock-closed.png';
import lockOpenIcon from '@/assets/icons/lock-open.png';
import userBigIcon from '@/assets/icons/user-big.png';
import userSmallIcon from '@/assets/icons/user-small.png';
import { validateEmail, validatePassword } from '@/utils/validation';

import styles from './login-page.module.scss';

function LoginPage(): ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailAccepted, setIsEmailAccepted] = useState(false);
  const [isPasswordAccepted, setIsPasswordAccepted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  function checkEmail({ target }: React.FocusEvent<HTMLInputElement>): void {
    const { value } = target;

    if (value === '') {
      setEmailError('This field is required');
      setIsEmailValid(false);
    } else if (!validateEmail(value)) {
      setEmailError('Email is not valid');
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setIsEmailAccepted(true);
    }
  }

  function handleEmailChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(target.value);
    setIsEmailValid(true);
    setEmailError('');
  }

  function checkPassword({ target }: React.FocusEvent<HTMLInputElement>): void {
    const { value } = target;

    if (value === '') {
      setPasswordError('This field is required');
      setIsPasswordValid(false);
    } else if (!validatePassword(value)) {
      setPasswordError('Password must be at least 6 characters long and contain a number');
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
      setIsPasswordAccepted(true);
    }
  }

  function handlePasswordChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(target.value);
    setIsPasswordValid(true);
    setPasswordError('');
  }

  const getInputClassName = (isValid: boolean, isAccepted: boolean): string =>
    classnames(styles.input, { [styles.invalid]: !isValid, [styles.valid]: isAccepted });

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.bigIcon} src={userBigIcon} alt="" width={128} height={128} />
        <div className={styles.inputbox}>
          <img className={styles.smallIcon} src={userSmallIcon} alt="" />
          <input
            className={getInputClassName(isEmailValid, isEmailAccepted)}
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
            onBlur={checkEmail}
          />
        </div>
        {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        <div className={styles.inputbox}>
          <img
            className={classnames(styles.smallIcon, styles.lockIcon)}
            src={showPassword ? lockOpenIcon : lockClosedIcon}
            onClick={() => setShowPassword(!showPassword)}
            alt=""
          />
          <input
            className={getInputClassName(isPasswordValid, isPasswordAccepted)}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={checkPassword}
          />
        </div>
        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
        <button className={styles.submitButton} type="submit" disabled={!isEmailValid || !isPasswordValid}>
          login
        </button>
      </form>
    </main>
  );
}

export { LoginPage };
