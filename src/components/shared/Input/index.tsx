import React, { useMemo, useState, useCallback } from 'react';
import classNames from 'classnames';

import { EyeHideIcon, EyeShowIcon } from 'assets/icons';

import Typography from '../Typography';

import { IInputProps } from './types';
import styles from './Input.module.scss';

const Input = React.forwardRef<any, IInputProps>(
  (
    {
      name,
      onBlur,
      error,
      label,
      isSmall,
      onChange,
      disabled,
      placeholder,
      defaultValue,
      type = 'text',
      className = '',
      anyIcon = false,
      isDisabledError,
      anyError = false,
      innerClassName = '',
      haveRightIcon = false,
      anyErrorMessage = '',
      RightIcon = EyeShowIcon,
      RightToggledIcon = EyeHideIcon,
      ...rest
    },
    ref,
  ) => {
    const inputClasses = classNames(styles.container, {
      [className]: className,
      [styles.container__error]: !!error,
      [styles.container__isLabel]: label,
      [styles.container_with_icon]: haveRightIcon,
      [styles.container__small]: isSmall,
    });

    const inputInnerClasses = classNames(styles.container__inner, {
      [innerClassName]: innerClassName,
      [styles.container__inner__error]: !!error,
      [styles.container__inner_disabled]: disabled,
    });

    const [isToggledIcon, setIsToggledIcon] = useState<boolean>(false);

    const togglePasswordVisibility = useCallback(() => {
      if (haveRightIcon) {
        setIsToggledIcon(!isToggledIcon);
      }
    }, [haveRightIcon, isToggledIcon]);

    const RightIconComponent = useMemo(
      () =>
        (haveRightIcon ? (isToggledIcon ? RightToggledIcon : RightIcon) : RightIcon) as React.FC<
          React.SVGProps<SVGSVGElement>
        >,
      [RightIcon, RightToggledIcon, haveRightIcon, isToggledIcon],
    );

    return (
      <>
        <div className={inputInnerClasses}>
          {label && (
            <label htmlFor={name} className={styles.container__inner__label}>
              {label}
            </label>
          )}

          <div className={styles.input}>
            <input
              {...rest}
              id={name}
              ref={ref}
              name={name}
              onBlur={onBlur}
              disabled={disabled}
              onChange={onChange}
              className={inputClasses}
              placeholder={placeholder}
              defaultValue={defaultValue}
              type={isToggledIcon ? 'text' : type}
            />

            {(haveRightIcon || anyIcon) && (
              <RightIconComponent
                role='button'
                className={styles.container__right_icon}
                onClick={togglePasswordVisibility}
                style={{
                  cursor: haveRightIcon ? 'pointer' : 'auto',
                }}
              />
            )}
          </div>
          {error && !isDisabledError && (
            <Typography type='Small' className={styles.container__error__text}>
              {error}
            </Typography>
          )}
          {anyError && (
            <Typography type='Small' className={styles.container__error__text}>
              {anyErrorMessage}
            </Typography>
          )}
        </div>
      </>
    );
  },
);

export default Input;
