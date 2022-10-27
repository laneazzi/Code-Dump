import { SyntheticEvent } from 'react';
import classNames from 'classnames';

import { IButton } from './types';
import styles from './Button.module.scss';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  color = 'primary',
  size = 's',
  type = 'button',
}: IButton): JSX.Element => {
  const btnClassNames = classNames(className, styles.btn, {
    [styles.btn__small]: size === 's',
    [styles.btn__middle]: size === 'm',
    [styles.btn__large]: size === 'l',
    [styles.btn__primary]: color === 'primary',
    [styles.btn__secondary]: color === 'secondary',
  });

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => onClick && onClick(e);

  return (
    <button className={btnClassNames} onClick={handleClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
