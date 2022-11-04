import { FC, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { TFilter } from './types';
import styles from './Filter.module.scss';
import FilterBy from './filterBy';

type TFilterProps = {
  filterItems: TFilter[];
};

const Filter: FC<TFilterProps> = ({ filterItems }) => {
  const [isActive, setIsActive] = useState<number>(0);
  const [isSort, setIsSort] = useState<boolean>(false);

  const handleSortClick = () => setIsSort(!isSort);

  const navigate = useNavigate();

  const goToPage = (path: string) => navigate(path);

  const activeItem = (id: number, path: string) => {
    setIsActive(id);
    setIsSort(false);
    if (path) {
      goToPage(path);
    }
  };

  const filterItemsRenderer = filterItems.map(({ id, name, path }) => {
    const activeClasses = classNames(styles.container__block__item, {
      [styles.container__block__item_active]: isActive === id,
    });
    return (
      <div onClick={() => activeItem(id, path!)} key={id} className={activeClasses}>
        {name}
      </div>
    );
  });

  const blockClasses = classNames(styles.container__block, {
    [styles.container__block_active]: isSort,
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__sort} onClick={handleSortClick}>
        Sort By
      </div>
      <div className={blockClasses}>{filterItemsRenderer}</div>
      <FilterBy />
    </div>
  );
};

export default Filter;
