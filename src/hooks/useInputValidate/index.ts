import { useEffect, useState } from 'react';

export type TUseInputValidate = {
  value: any;
  isBlur: boolean;
  isValid: boolean;
  isEmpty: boolean;
  errorMessage: string;
  onBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => void;
};

const useInputValidate = (initialValue: any): TUseInputValidate => {
  const [value, setValue] = useState(initialValue);
  const [isBlur, setIsBlur] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const errorMessage = "The field can't be empty";

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsBlur(true);
  };

  useEffect(() => {
    if (value.length <= 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmpty]);

  return {
    isBlur,
    value,
    isValid,
    onBlur,
    isEmpty,
    onChange,
    errorMessage,
  };
};

export default useInputValidate;
