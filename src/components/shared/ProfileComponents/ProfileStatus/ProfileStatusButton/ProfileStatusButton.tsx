import { FC } from 'react';
import classNames from 'classnames';

import styles from './ProfileStatusButton.module.scss';

type TProfileStatusButtonProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

const ProfileStatusButton: FC<TProfileStatusButtonProps> = ({ isActive, setIsActive }) => {
  const activateStatus = () => setIsActive(!isActive);

  const statusBarClasses = classNames(styles.status, { [styles.status_active]: isActive });

  const statusBarBtnClasses = classNames(styles.status__btn, {
    [styles.status_active_btn]: isActive,
  });

  return (
    <div className={statusBarClasses} onClick={activateStatus}>
      <div className={statusBarBtnClasses} />
    </div>
  );
};

export default ProfileStatusButton;
