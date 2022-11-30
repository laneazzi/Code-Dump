import React, { FC } from 'react';

import { Typography } from 'components';
import { FilterByDropIcon } from 'assets/icons';

import styles from './FilterByItem.module.scss';

type TFilterByItemProps = {
  title: string;
  titleStatus: string;
  icon?: React.ReactNode;
};

const FilterByItem: FC<TFilterByItemProps> = ({ title, titleStatus }) => {
  return (
    <div className={styles.drop}>
      <Typography className={styles.drop__title} tagName='div'>
        {title}
      </Typography>
      <Typography className={styles.drop__main} tagName='div'>
        {titleStatus}
        <FilterByDropIcon />
      </Typography>
    </div>
  );
};

export default FilterByItem;
