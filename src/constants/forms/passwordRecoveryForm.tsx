import * as yup from 'yup';

import { Field, Form } from 'components/forms/SignInForm/types';

const fields: Field[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email...',
  },
];

const schema = yup.object().shape({
  email: yup
    .string()
    .required('The Email is required')
    .email('The Email must be a valid email address'),
});

const passwordRecoveryForm: Form = {
  fields,
  schema,
};

export default passwordRecoveryForm;
