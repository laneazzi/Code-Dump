import { useEffect, useMemo } from 'react';

import { CardsList } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { todayTopCards } from 'constants/Cards/todayTopCards';
import { getAllPosts } from 'store/slices/activitiesSlice/activitiesThunks';

import Post from './Post';
import styles from './Forum.module.scss';

const Forum = () => {
  const dispatch = useAppDispatch();
  const { allActivities } = useAppSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getAllPosts({ limit: 20, offset: 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cards = useMemo(
    () =>
      allActivities.map((card) => {
        return <Post key={card.id} card={card} />;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allActivities],
  );

  return (
    <div className={styles.forum}>
      <div className={styles.forum__posts}>{cards}</div>
      <div className={styles.forum__top}>
        <CardsList title='In high today' cardsList={todayTopCards} />
      </div>
    </div>
  );
};

export default Forum;
