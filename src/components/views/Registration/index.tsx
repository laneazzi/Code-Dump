import { FC, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import registrationForm from 'constants/forms/registrationForm';
import { ReelBudLogoIcon, ReelBudTextIcon } from 'assets/icons';
import { Checkbox, LinkButton, Typography } from 'components/shared';

import { RegistrationForm } from '../../forms';

import styles from './Registration.module.scss';

type TUserRegistrationProps = {
  toggleActive: (value: string) => void;
};

const Registration: FC<TUserRegistrationProps> = ({ toggleActive }) => {
  const navigate = useNavigate();

  const registrationFormRef = useRef<any>(null);

  const handleSignInFormSubmit = useCallback(() => {
    navigate(Routes.LogIn);

    registrationFormRef.current.onSubmitFailed();
  }, [navigate]);

  return (
    <div className={`${styles.login} container__all`}>
      <div className={styles.login__content}>
        <div className={styles.login__content_logo}>
          <ReelBudLogoIcon className={styles.login__content_logo_item} />
          <ReelBudTextIcon className={styles.login__content_logo_item} />
        </div>

        <RegistrationForm
          className={styles.login__content_form}
          ref={registrationFormRef}
          form={registrationForm}
          submitText='Sign Up'
          onSubmit={handleSignInFormSubmit}
        />
        <div className={styles.login__content_sign} onClick={() => toggleActive('')}>
          <LinkButton to='#' className={styles.login__content_sign_item}>
            <Typography tagName='span' className={styles.login__content_sign_item_txt}>
              Log In For Factzz
              <Checkbox />
            </Typography>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Registration;
