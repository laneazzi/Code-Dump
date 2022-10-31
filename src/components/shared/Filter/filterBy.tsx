import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from 'hooks';
import { FilterIcon } from 'assets/icons';
import { CreateEventDropDown, DatePickerSelect } from 'components/views';
import { locationsOptionsList, statusBarOptionsList } from 'utils/optionsList';

import Typography from '../Typography';

import styles from './Filter.module.scss';

const FilterBy: FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const expandedRef = useRef<HTMLDivElement | null>(null);

  const closeFilter = () => setExpanded(false);

  useOnClickOutside(expandedRef, closeFilter);

  const handleFilterClick = () => {
    setExpanded(!expanded);
  };

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  const dropDownClasses = classNames(styles.filter__content__close, {
    [styles.filter__content__open]: expanded,
  });

  return (
    <div className={styles.filter} onClick={handleFilterClick} ref={expandedRef}>
      <div className={styles.filter__content} onClick={handlePropagation}>
        <FilterIcon />
        <Typography>Filter By</Typography>
      </div>
      <div className={dropDownClasses} onClick={handlePropagation}>
        <div className={styles.filter__content__close_list}>
          <CreateEventDropDown title='Status' optionList={statusBarOptionsList} size='large' />
          <CreateEventDropDown title='Location' optionList={locationsOptionsList} size='large' />
          <DatePickerSelect title='Availability' size='large' />
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
