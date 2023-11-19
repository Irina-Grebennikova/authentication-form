import classnames from 'classnames';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import userSmallIcon from '@/assets/icons/user-small.png';
import { validateEmail } from '@/utils/validation';

import styles from './email-input.module.scss';

type EmailInputProps = {
  isSubmited: boolean;
  isEmailAccepted: boolean;
  setIsEmailAccepted: (isAccepted: boolean) => void;
};

function EmailInput({ isSubmited, isEmailAccepted, setIsEmailAccepted }: EmailInputProps): ReactElement {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    if (isSubmited) {
      checkEmail();
    }
  }, [isSubmited]);

  function checkEmail(): void {
    if (email === '') {
      setEmailError('This field is required');
      setIsEmailValid(false);
      setIsEmailAccepted(false);
    } else if (!validateEmail(email)) {
      setEmailError('Email is not valid');
      setIsEmailValid(false);
      setIsEmailAccepted(false);
    } else {
      setIsEmailValid(true);
      setIsEmailAccepted(true);
    }
  }

  function handleEmailChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setEmail(target.value);
    setIsEmailValid(true);
    setEmailError('');
  }

  const getInputClassName = (isValid: boolean, isAccepted: boolean): string =>
    classnames(styles.input, { [styles.invalid]: !isValid, [styles.valid]: isAccepted });

  return (
    <>
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
    </>
  );
}

export { EmailInput };
