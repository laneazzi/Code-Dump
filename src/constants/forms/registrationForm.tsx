import * as yup from 'yup';

import { EyeHideIcon, EyeShowIcon } from 'assets/icons';
import { Field, Form } from 'components/forms/SignInForm/types';

const fields: Field[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email...',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password...',
    RightIcon: EyeShowIcon,
    RightToggledIcon: EyeHideIcon,
  },
  {
    name: 'confirmedPassword',
    type: 'password',
    placeholder: 'Confirm Password...',
    RightIcon: EyeShowIcon,
    RightToggledIcon: EyeHideIcon,
  },
];

const schema = yup.object().shape({
  email: yup
    .string()
    .required('The Email is required')
    .email('The Email must be a valid email address'),
  password: yup
    .string()
    .required('The Password is required')
    .min(5, 'Password is too short - should be 8 chars minimum.'),
  confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must be same'),
});

const signInForm: Form = {
  fields,
  schema,
};

export default signInForm;
