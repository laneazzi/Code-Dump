import * as yup from 'yup';

import { EyeHideIcon, EyeShowIcon } from 'assets/icons';
import { Field, Form } from 'components/forms/SignInForm/types';

const fields: Field[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username...',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password...',
    RightIcon: EyeShowIcon,
    RightToggledIcon: EyeHideIcon,
  },
];

const schema = yup.object().shape({
  username: yup.string().required('The Username is required'),
  password: yup
    .string()
    .required('The Password is required')
    .min(5, 'Password is too short - should be 8 chars minimum.'),
});

const signInForm: Form = {
  fields,
  schema,
};

export default signInForm;
