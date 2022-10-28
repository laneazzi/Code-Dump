import { Fragment, useMemo } from 'react';

import { EventCard, Filter } from 'components';
import { filterItems } from 'utils/filterItems';
import { EventTypes } from 'types/global/eventTypes';
import { TournamentCardInfo } from 'utils/localBackend';

import styles from './Tournament.module.scss';

const Tournament = () => {
  const tournaments = useMemo(
    () =>
      TournamentCardInfo.map((tournament) => (
        <EventCard key={tournament.id} event={tournament} type={EventTypes.TOURNAMENT} />
      )),
    [],
  );

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.tournament}>{tournaments}</div>
    </Fragment>
  );
};

export default Tournament;
