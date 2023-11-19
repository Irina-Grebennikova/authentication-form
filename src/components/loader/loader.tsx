import classnames from 'classnames';
import { ReactElement } from 'react';

import styles from './loader.module.scss';

function Loader({ className = '' }): ReactElement {
  return (
    <div className={classnames(styles.loader, className)}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export { Loader };
