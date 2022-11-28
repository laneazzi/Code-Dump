import { FC, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import { useAppDispatch } from 'hooks';
import signIn from 'constants/forms/signinForm';
import { signInAuth } from 'store/slices/authSlice';
import { ReelBudLogoIcon, ReelBudTextIcon } from 'assets/icons';
import { Checkbox, LinkButton, RadioButton, Typography } from 'components/shared';

import { SignInForm } from '../../forms';
import { IsActiveType } from '../../../types/global';

import styles from './SignIn.module.scss';

type TSignInProps = {
  toggleActive: (value: string, bool: boolean) => void;
};

const SignIn: FC<TSignInProps> = ({ toggleActive }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signInRef = useRef<any>(null);

  const handleSignInFormSubmit = useCallback(
    async (values: any) => {
      const loginData: any = {
        password: values.password,
        username: values.username,
      };

      const form_data = new FormData();

      for (const key in loginData) {
        form_data.append(key, loginData[key]);
      }

      const response = await dispatch(signInAuth(form_data));

      if (response) {
        navigate(Routes.Home);
      }

      signInRef.current.onSubmitFailed();
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
        <SignInForm
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

          <LinkButton
            to={Routes.LogIn}
            className={styles.login__content_keep_forgot}
            onClick={() => toggleActive(IsActiveType.RECOVERY, true)}
          >
            <Typography className={styles.login__content_keep_forgot_txt}>
              Forgot Password?
            </Typography>
          </LinkButton>
        </div>

        <div className={styles.login__content_sign}>
          <Typography className={styles.login__content_sign_answer}>
            Don’t have an account yet?
          </Typography>
          <LinkButton
            to='#'
            className={styles.login__content_sign_item}
            onClick={() => toggleActive(IsActiveType.REGISTRATION, true)}
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

export default SignIn;
