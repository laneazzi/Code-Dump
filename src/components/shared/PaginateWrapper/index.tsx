import { FC, useState } from 'react';
import Pagination from 'react-js-pagination';

import { PaginationNextIcon } from 'assets/icons';

import styles from './PaginateWrapper.module.scss';

type TPaginateWrapperProps = {
  totalItemsCount: number;
  itemsCountPerPage: number;
  pageRangeDisplayed?: number;
};

const PaginateWrapper: FC<TPaginateWrapperProps> = ({
  totalItemsCount,
  pageRangeDisplayed,
  itemsCountPerPage = 5,
}) => {
  const [activePage, setActivePage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <div className={styles.paginate}>
      <Pagination
        activePage={activePage}
        hideFirstLastPages={true}
        onChange={handlePageChange}
        innerClass={styles.paginate__box}
        totalItemsCount={totalItemsCount}
        itemClass={styles.paginate__box_item}
        itemsCountPerPage={itemsCountPerPage}
        pageRangeDisplayed={pageRangeDisplayed}
        activeClass={styles.paginate__box_item_active}
        nextPageText={<PaginationNextIcon className={styles.paginate__box_item_next} />}
        prevPageText={<PaginationNextIcon className={styles.paginate__box_item_prev} />}
      />
    </div>
  );
};

export default PaginateWrapper;
