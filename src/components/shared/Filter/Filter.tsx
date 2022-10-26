import { FC, useState } from 'react';
import classNames from 'classnames';

import FilterBy from './filterBy';
import { TFilter } from './types';
import styles from './Filter.module.scss';

type TFilterProps = {
  filterItems: TFilter[];
};

const Filter: FC<TFilterProps> = ({ filterItems }) => {
  const [isActive, setIsActive] = useState<number>(0);

  const activeItem = (id: number) => {
    setIsActive(id);
  };

  const filterItemsRenderer = filterItems.map(({ id, name }) => {
    const activeClasses = classNames(styles.container__block__item, {
      [styles.container__block__item_active]: isActive === id,
    });
    return (
      <div onClick={() => activeItem(id)} key={id} className={activeClasses}>
        {name}
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.container__block}>{filterItemsRenderer}</div>
      <FilterBy />
    </div>
  );
};

export default Filter;
