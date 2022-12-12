import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { searchList } from 'utils';
import { InputSearchIcon } from 'assets/icons';

import { Input, Typography } from '../index';

import { TSearchFiledProps } from './types';
import styles from './SearchField.module.scss';

const SearchField: FC<TSearchFiledProps> = ({
  isSearch,
  withBox = false,
  placeholder = 'Search...',
}) => {
  const inputSearchClasses = classNames(styles.header__field, {
    [styles.header__field_active]: isSearch,
  });

  const boxList = searchList.map((item) => <Typography key={item.value}>{item.value}</Typography>);

  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      {!withBox ? (
        <Input
          anyIcon
          type='text'
          placeholder={placeholder}
          RightIcon={InputSearchIcon}
          innerClassName={inputSearchClasses}
          className={styles.header__field_block}
        />
      ) : (
        <div className={styles.search}>
          <Input
            anyIcon
            type='text'
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            RightIcon={InputSearchIcon}
            innerClassName={inputSearchClasses}
            className={styles.header__field_block}
          />
          {value.length > 1 && (
            <div className={styles.search__case}>
              <div className={styles.search__case__content}>{boxList}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchField;
