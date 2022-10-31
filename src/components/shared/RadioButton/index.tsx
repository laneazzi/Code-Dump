import classNames from 'classnames';
import { FC, useState } from 'react';

import styles from './RadioButton.module.scss';

type TRadioButtonProps = {
  className?: string;
};

const RadioButton: FC<TRadioButtonProps> = ({ className }) => {
  const [isKeep, setIsKeep] = useState<boolean>(false);

  const radioClassNames = classNames(styles.radio, className);

  const radioCheckedClassNames = classNames(styles.radio__btn, {
    [styles.radio__btn_active]: isKeep,
  });

  const keepTheUser = () => {
    setIsKeep(!isKeep);
  };

  return (
    <div className={radioClassNames} onClick={keepTheUser}>
      <div className={radioCheckedClassNames} />
    </div>
  );
};

export default RadioButton;
