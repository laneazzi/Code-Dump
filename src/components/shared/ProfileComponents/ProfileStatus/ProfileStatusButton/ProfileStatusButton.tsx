import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './ProfileStatusButton.module.scss';

const ProfileStatusButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const activateStatus = () => setIsActive(!isActive);

  const statusBarClasses = classNames(styles.status, { [styles.status__active]: isActive });

  const statusBarBtnClasses = classNames(styles.status__btn, {
    [styles.status__active_btn]: isActive,
  });

  return (
    <div className={statusBarClasses} onClick={activateStatus}>
      <div className={statusBarBtnClasses} />
    </div>
  );
};

export default ProfileStatusButton;
