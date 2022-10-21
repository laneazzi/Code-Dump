import React, { Fragment } from 'react';

import PeopleCard from 'components/shared/Cards/PeopleCard';
import { TPeopleCard } from 'components/shared/Cards/PeopleCard/types';
import { GuyImg } from 'assets/img';
import Filter from 'components/shared/Filter/Filter';
import { TFilter } from 'components/shared/Filter/types';

const Search = () => {
  const peopleData: TPeopleCard = {
    id: 1,
    userImg: GuyImg,
    userName: 'Username',
    userStatus: false,
  };

  const filterItems: TFilter[] = [
    { id: 0, name: 'People' },
    { id: 1, name: 'Fish' },
    { id: 2, name: 'Videos' },
    { id: 3, name: 'Locations' },
  ];

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div>
        <PeopleCard people={peopleData} />
      </div>
    </Fragment>
  );
};

export default Search;
