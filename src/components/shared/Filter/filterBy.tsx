import React, { useState } from 'react';
import classNames from 'classnames';

import { FilterIcon } from 'assets/icons';

import Typography from '../Typography';

import styles from './Filter.module.scss';

const FilterBy: React.FC<any> = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleFilterClick = () => {
    setExpanded(!expanded);
  };

  const dropDownClasses = classNames(styles.filter__content__close, {
    [styles.filter__content__open]: expanded,
  });

  return (
    <div className={styles.filter}>
      <div onClick={handleFilterClick} className={styles.filter__content}>
        <FilterIcon />
        <Typography>Filter By</Typography>
      </div>
      <div className={dropDownClasses}>Upcoming filter selects</div>
    </div>
  );
};

export default FilterBy;
