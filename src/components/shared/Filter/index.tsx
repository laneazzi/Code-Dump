import { FC, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { SearchField } from '../../shared';

import FilterBy from './filterBy';
import { TFilterProps } from './types';
import styles from './Filter.module.scss';

const Filter: FC<TFilterProps> = ({ filterItems, withSearch = false }) => {
  const [isActive, setIsActive] = useState<number>(0);
  const [isSort, setIsSort] = useState<boolean>(false);

  const containerClasses = classNames(styles.container, { [styles.container__search]: withSearch });

  const navigate = useNavigate();
  const handleSortClick = () => setIsSort(!isSort);

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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      <div onClick={() => activeItem(id, path!)} key={id} className={activeClasses}>
        {name}
      </div>
    );
  });

  const blockClasses = classNames(styles.container__block, {
    [styles.container__block_active]: isSort,
  });

  return (
    <div className={containerClasses}>
      <div className={styles.container__sort} onClick={handleSortClick}>
        Sort By
      </div>
      <div className={blockClasses}>{filterItemsRenderer}</div>
      {withSearch ? (
        <div className={styles.search__field}>
          <SearchField placeholder='Search by Tournament...' withBox />
          <FilterBy />
        </div>
      ) : (
        <FilterBy />
      )}
    </div>
  );
};

export default Filter;
