import { Fragment, useMemo } from 'react';

import { Filter } from 'components';
import { userSearchCase } from 'utils/localBackend';
import { TFilter } from 'components/shared/Filter/types';
import PeopleCard from 'components/shared/Cards/PeopleCard';

import styles from './Search.module.scss';

const Search = () => {
  const filterItems: TFilter[] = [
    { id: 0, name: 'People' },
    { id: 1, name: 'Fish' },
    { id: 2, name: 'Videos' },
    { id: 3, name: 'Locations' },
  ];

  const users = useMemo(
    () => userSearchCase.map((user) => <PeopleCard key={user.id} people={user} />),
    [],
  );

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.search}>{users}</div>
    </Fragment>
  );
};

export default Search;
