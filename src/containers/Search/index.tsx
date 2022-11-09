import { Fragment, useMemo, useState } from 'react';
import classNames from 'classnames';

import { Routes } from 'types';
import { Filter, LiveChat } from 'components';
import { userSearchCase } from 'utils/localBackend';
import { TFilter } from 'components/shared/Filter/types';
import PeopleCard from 'components/shared/Cards/PeopleCard';

import styles from './Search.module.scss';

const Search = () => {
  const [startTheChat, setStartTheChat] = useState<boolean>(false);

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
    [],
  );

  const closeTheChat = () => setStartTheChat(false);

  const chatClasses = classNames(styles.search__chat, {
    [styles.search__chat_active]: startTheChat,
  });

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.search}>{users}</div>

      <div className={chatClasses}>
        <LiveChat messages={[]} type='global' closeTheChat={closeTheChat} />
      </div>
    </Fragment>
  );
};

export default Search;
