import { FC, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import { Checkbox, LinkButton, Typography } from 'components';
import { ReelBudLogoIcon, ReelBudTextIcon } from 'assets/icons';
import passwordRecoveryForm from 'constants/forms/passwordRecoveryForm';

import { RecoveryForm } from '../../forms';
import { IsActiveType } from '../../../types/global';

import { TRecoveryProps } from './types';
import styles from './PasswordRecovery.module.scss';

const PasswordRecovery: FC<TRecoveryProps> = ({ toggleActive }) => {
  const navigate = useNavigate();

  const passwordRecoveryRef = useRef<any>(null);

  const handleSignInFormSubmit = useCallback(() => {
    navigate(Routes.LogIn);

    passwordRecoveryRef.current.onSubmitFailed();
  }, [navigate]);

  return (
    <div className={`${styles.login} container__all`}>
      <div className={styles.login__content}>
        <div className={styles.login__content_logo}>
          <ReelBudLogoIcon className={styles.login__content_logo_item} />
          <ReelBudTextIcon className={styles.login__content_logo_item} />
        </div>
        <RecoveryForm
          className={styles.login__content_form}
          ref={passwordRecoveryRef}
          form={passwordRecoveryForm}
          submitText='Send the verification code'
          onSubmit={handleSignInFormSubmit}
        />

        <div className={styles.login__content_sign}>
          <Typography className={styles.login__content_sign_answer}>
            Don’t have an account yet?
          </Typography>
          <LinkButton
            to='#'
            className={styles.login__content_sign_item}
            onClick={() => toggleActive(IsActiveType.REGISTRATION)}
          >
            <Typography tagName='span' className={styles.login__content_sign_item_txt}>
              Sign Up For Factzz
              <Checkbox />
            </Typography>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
