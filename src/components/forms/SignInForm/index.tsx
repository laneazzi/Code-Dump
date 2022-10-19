import React, { useMemo, useImperativeHandle, useCallback, forwardRef } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../shared/Input';
import Button from '../../shared/Button';
import { IFormProps } from '../FormTypes';

const SignInForm = forwardRef<any, IFormProps>(
  ({ form: { fields, schema }, onSubmit, submitText, className = '' }, ref) => {
    const {
      register,
      setFocus,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    const formClasses = classNames('form', {
      [className]: className,
    });

    const renderFields = useMemo(
      () =>
        fields.map(({ name, ...rest }) => {
          return (
            <Input
              haveRightIcon={rest.type === 'password'}
              key={name}
              {...rest}
              {...register(name as string)}
              error={errors[name as string]?.message as string}
            />
          );
        }),

      [errors, fields, register],
    );

    const onSubmitFailed = useCallback(() => {
      setFocus(fields[0].name as any);
    }, [fields, setFocus]);

    useImperativeHandle(
      ref,
      () => ({
        onSubmitFailed,
      }),
      [onSubmitFailed],
    );

    return (
      <form className={formClasses} onSubmit={handleSubmit(onSubmit)}>
        {renderFields}
        <Button type='submit' className='button'>
          {submitText}
        </Button>
      </form>
    );
  },
);

export default SignInForm;
