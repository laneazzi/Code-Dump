import { FC } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from 'hooks';
import { keptSignIn } from 'store/slices/authSlice/authSlice';

import styles from './RadioButton.module.scss';

type TRadioButtonProps = {
  className?: string;
};

const RadioButton: FC<TRadioButtonProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { rememberMe } = useAppSelector((state) => state.auth);

  const radioClassNames = classNames(styles.radio, className);

  const radioCheckedClassNames = classNames(styles.radio__btn, {
    [styles.radio__btn_active]: rememberMe,
  });

  const keepTheUser = () => {
    dispatch(keptSignIn());
  };

  return (
    <div className={radioClassNames} onClick={keepTheUser}>
      <div className={radioCheckedClassNames} />
    </div>
  );
};

export default RadioButton;
