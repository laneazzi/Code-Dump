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
    type: 'text',
    name: 'username',
    placeholder: 'Username...',
  },
  {
    name: 'password',
    type: 'password',
    RightIcon: EyeShowIcon,
    placeholder: 'Password...',
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
  username: yup.string().required('The Username is required'),
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
