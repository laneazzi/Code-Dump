import { useMemo, useState } from 'react';
import classNames from 'classnames';

import { proUsersFilters } from 'utils';
import { userSearchCase } from 'utils/localBackend';
import PeopleCard from 'components/shared/Cards/PeopleCard';
import { Filter, LiveChat, PaginateWrapper } from 'components';

import styles from './ProUsers.module.scss';

const ProUsers = () => {
  const [currentPerPage] = useState<number>(15);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startTheChat, setStartTheChat] = useState<boolean>(false);

  const changePage = (page: number) => setCurrentPage(page);

  const lastIndex = currentPage * currentPerPage;
  const firstIndex = lastIndex - currentPerPage;

  const users = useMemo(
    () =>
      userSearchCase.map((user) => {
        return (
          <PeopleCard
            status='Pro'
            key={user.id}
            people={user}
            startTheChat={startTheChat}
            setStartTheChat={setStartTheChat}
          />
        );
      }),
    // eslint-disable-next-line
    [],
  );

  const filteredUsers = users.slice(firstIndex, lastIndex);

  const closeTheChat = () => setStartTheChat(false);

  const chatClasses = classNames(styles.pro__chat, {
    [styles.pro__chat_active]: startTheChat,
  });

  return (
    <>
      <Filter filterItems={proUsersFilters} />
      <div className={styles.pro}>{filteredUsers}</div>

      <div className={chatClasses}>
        <LiveChat messages={[]} type='global' closeTheChat={closeTheChat} />
      </div>
      <PaginateWrapper
        changePage={changePage}
        itemsCountPerPage={currentPerPage}
        totalItemsCount={userSearchCase.length}
      />
    </>
  );
};

export default ProUsers;
