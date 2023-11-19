import classnames from 'classnames';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import hideIcon from '@/assets/icons/hide.svg';
import lockClosedIcon from '@/assets/icons/lock-closed.png';
import showIcon from '@/assets/icons/show.svg';
import { validatePassword } from '@/utils/validation';

import styles from './password-input.module.scss';

type PasswordInputProps = {
  isSubmited: boolean;
  isPasswordAccepted: boolean;
  setIsPasswordAccepted: (isAccepted: boolean) => void;
};

function PasswordInput({ isPasswordAccepted, setIsPasswordAccepted, isSubmited }: PasswordInputProps): ReactElement {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSubmited) {
      checkPassword();
    }
  }, [isSubmited]);

  function checkPassword(): void {
    if (password === '') {
      setPasswordError('This field is required');
      setIsPasswordValid(false);
      setIsPasswordAccepted(false);
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long and contain a number');
      setIsPasswordValid(false);
      setIsPasswordAccepted(false);
    } else {
      setIsPasswordValid(true);
      setIsPasswordAccepted(true);
    }
  }

  function handlePasswordChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setPassword(target.value);
    setIsPasswordValid(true);
    setPasswordError('');
  }

  const getInputClassName = (isValid: boolean, isAccepted: boolean): string =>
    classnames(styles.input, { [styles.invalid]: !isValid, [styles.valid]: isAccepted });

  return (
    <>
      <div className={styles.inputbox}>
        <img className={classnames(styles.smallIcon, styles.lockIcon)} src={lockClosedIcon} alt="" />
        <input
          className={getInputClassName(isPasswordValid, isPasswordAccepted)}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Your password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={checkPassword}
        />
        <img
          className={styles.visibilityIcon}
          src={showPassword ? hideIcon : showIcon}
          alt={showPassword ? 'Hide' : 'Show'}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
    </>
  );
}

export { PasswordInput };
