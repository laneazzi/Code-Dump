import { useEffect, useMemo, useState } from 'react';

import { filterItems } from 'utils';
import { EventTypes } from 'types/global/eventTypes';
import { useAppDispatch, useAppSelector } from 'hooks';
import { EventCard, Filter, PaginateWrapper } from 'components';
import { getMyTournaments } from 'store/slices/tournamentsSlice/tournamentsThunks';

import styles from './Tournament.module.scss';

const Tournament = () => {
  const dispatch = useAppDispatch();

  const [currentPerPage] = useState<number>(9);

  const { tournaments } = useAppSelector((state) => state.tournaments);

  useEffect(() => {
    dispatch(getMyTournaments());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

  const tournamentItems = useMemo(
    () =>
      tournaments.map((tournament) => (
        <EventCard key={tournament?.id} event={tournament} type={EventTypes.TOURNAMENT} />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tournaments],
  );

  const filteredTournaments = tournamentItems.slice(firstIndex, lastIndex);

  return (
    <>
      <Filter filterItems={filterItems} />
      {filteredTournaments.length <= 0 ? (
        <div className={styles.tournament__empty}>No Tournaments added yet</div>
      ) : (
        <>
          <div className={styles.tournament}>{filteredTournaments}</div>

          <PaginateWrapper
            changePage={changePage}
            totalItemsCount={tournaments.length}
            itemsCountPerPage={currentPerPage}
          />
        </>
      )}
    </>
  );
};

export default Tournament;
