import { Fragment, useMemo, useState } from 'react';
import classNames from 'classnames';

import { Routes } from 'types';
import { Filter, LiveChat, PaginateWrapper } from 'components';
import { userSearchCase } from 'utils/localBackend';
import { TFilter } from 'components/shared/Filter/types';
import PeopleCard from 'components/shared/Cards/PeopleCard';

import styles from './Search.module.scss';

const Search = () => {
  const [currentPerPage] = useState<number>(15);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startTheChat, setStartTheChat] = useState<boolean>(false);

  const changePage = (page: number) => setCurrentPage(page);

  const lastIndex = currentPage * currentPerPage;
  const firstIndex = lastIndex - currentPerPage;

  const filterItems: TFilter[] = [
    { id: 0, name: 'People' },
    { id: 1, name: 'Videos' },
    { id: 2, name: 'Locations' },
    { id: 3, name: 'Events', path: Routes.Events },
    { id: 4, name: 'Tournaments', path: Routes.Tournament },
  ];

  const users = useMemo(
    () =>
      userSearchCase.map((user) => (
        <PeopleCard
          key={user.id}
          people={user}
          startTheChat={startTheChat}
          setStartTheChat={setStartTheChat}
        />
      )),
    // eslint-disable-next-line
    [],
  );

  const filteredUsers = users.slice(firstIndex, lastIndex);

  const closeTheChat = () => setStartTheChat(false);

  const chatClasses = classNames(styles.search__chat, {
    [styles.search__chat_active]: startTheChat,
  });

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.search}>{filteredUsers}</div>

      <div className={chatClasses}>
        <LiveChat messages={[]} type='global' closeTheChat={closeTheChat} />
      </div>
      <PaginateWrapper
        changePage={changePage}
        itemsCountPerPage={currentPerPage}
        totalItemsCount={userSearchCase.length}
      />
    </Fragment>
  );
};

export default Search;
