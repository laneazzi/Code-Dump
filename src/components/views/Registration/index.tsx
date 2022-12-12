import { FC, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import { useAppDispatch } from 'hooks';
import { signUp } from 'store/slices/authSlice/authThunks';
import { Checkbox, LinkButton, Typography } from 'components';
import registrationForm from 'constants/forms/registrationForm';
import { ReelBudLogoIcon, ReelBudTextIcon } from 'assets/icons';

import { RegistrationForm } from '../../forms';

import { TUserRegistrationProps } from './types';
import styles from './Registration.module.scss';

const Registration: FC<TUserRegistrationProps> = ({ toggleActive }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registrationFormRef = useRef<any>(null);

  const handleSignInFormSubmit = useCallback(
    async (values: any) => {
      const user = {
        email: values.email,
        password: values.password,
        username: values.username,
      };

      const response = await dispatch(signUp(user));

      if (response) {
        navigate(Routes.Home);
      }

      registrationFormRef.current.onSubmitFailed();
    },
    [dispatch, navigate],
  );

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
