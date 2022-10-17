import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import Form from 'components/forms/Form';
import signIn from 'constants/forms/signinForm';
import { ReelBudLogoIcon, ReelBudTextIcon } from 'assets/icons';
import { Checkbox, LinkButton, RadioButton, Typography } from 'components/shared';

import styles from './Login.module.scss';

const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const signInRef = useRef<any>(null);

  const handleSignInFormSubmit = useCallback(
    (values: any) => {
      // eslint-disable-next-line no-console
      console.log(values, 'values');
      navigate(Routes.Home);

      signInRef.current.onSubmitFailed();
    },
    [navigate],
  );

  return (
    <div className={`${styles.login} container`}>
      <div className={styles.login__content}>
        <div className={styles.login__content_logo}>
          <ReelBudLogoIcon className={styles.login__content_logo_item} />
          <ReelBudTextIcon className={styles.login__content_logo_item} />
        </div>
        <Form
          className={styles.login__content_form}
          ref={signInRef}
          form={signIn}
          submitText='Login'
          onSubmit={handleSignInFormSubmit}
        />

        <div className={styles.login__content_keep}>
          <div className={styles.login__content_keep_save}>
            <RadioButton className={styles.login__content_keep_save_btn} />
            <Typography>Keep Logged in</Typography>
          </div>

          <LinkButton to={Routes.Home} className={styles.login__content_keep_forgot}>
            <Typography className={styles.login__content_keep_forgot_txt}>
              Forgot Password?
            </Typography>
          </LinkButton>
        </div>

        <div className={styles.login__content_sign}>
          <Typography className={styles.login__content_sign_answer}>
            Don’t have an account yet?
          </Typography>
          <LinkButton to={Routes.SignUpFor} className={styles.login__content_sign_item}>
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

export default LogIn;
