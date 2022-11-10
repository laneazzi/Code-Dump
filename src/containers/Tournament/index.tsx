import { Fragment, useMemo, useState } from 'react';

import { EventCard, Filter, PaginateWrapper } from 'components';
import { filterItems } from 'utils/filterItems';
import { EventTypes } from 'types/global/eventTypes';
import { TournamentCardInfo } from 'utils/localBackend';

import styles from './Tournament.module.scss';

const Tournament = () => {
  const [currentPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

  const tournaments = useMemo(
    () =>
      TournamentCardInfo.map((tournament) => (
        <EventCard key={tournament.id} event={tournament} type={EventTypes.TOURNAMENT} />
      )),
    // eslint-disable-next-line
    [],
  );

  const filteredTournaments = tournaments.slice(firstIndex, lastIndex);

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.tournament}>{filteredTournaments}</div>
      <PaginateWrapper
        changePage={changePage}
        totalItemsCount={tournaments.length}
        itemsCountPerPage={currentPerPage}
      />
    </Fragment>
  );
};

export default Tournament;
