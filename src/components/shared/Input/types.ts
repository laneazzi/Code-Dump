import React, { HTMLInputTypeAttribute } from 'react';

export interface IInputProps {
  value?: any;
  onBlur?: any;
  name?: string;
  label?: string;
  onChange?: any;
  anyIcon?: boolean;
  isSmall?: boolean;
  className?: string;
  disabled?: boolean;
  anyError?: boolean;
  defaultValue?: any;
  placeholder?: string;
  haveRightIcon?: boolean;
  innerClassName?: string;
  labelClassName?: string;
  anyErrorMessage?: string;
  error?: string | boolean;
  isDisabledError?: boolean;
  type?: HTMLInputTypeAttribute;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  RightToggledIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
