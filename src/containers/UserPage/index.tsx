import { Fragment, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { VideoCard } from 'components';
import { cardImgTwo } from 'assets/img';
import {
  ProfileBio,
  VideoFilter,
  ProfileStatus,
  ProfileSideImg,
} from 'components/shared/ProfileComponents';
import { profileVideosData } from 'utils/localBackend/profileVideosData';
import { userSearchCase } from 'utils/localBackend';

import styles from './UserPage.module.scss';

const UserPage = () => {
  const { id } = useParams();

  const profileVideos = useMemo(
    () => profileVideosData.map((video) => <VideoCard key={video.id} video={video.video} />),
    [],
  );

  const [isActive, setIsActive] = useState<boolean>(false);

  const profileInfo = userSearchCase.map((user) => {
    if (user.id === Number(id)) {
      return (
        <div className={styles.profile__content} key={user.id}>
          <section className={styles.profile__content_head}>
            <ProfileStatus
              isActive={isActive}
              setIsActive={setIsActive}
              frameImg={user.userImg}
              frameClassName={styles.profile__content_head_frame}
            />
            <ProfileSideImg img={cardImgTwo} />
          </section>
          {isActive && (
            <Fragment>
              <section className={styles.profile__content_info}>
                <ProfileBio info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 😄🐠" />
              </section>
              <section className={styles.profile__content_filter}>
                <VideoFilter videoCount={profileVideosData.length} livesCount={0} />
              </section>
              <section className={styles.profile__content_videos}>{profileVideos}</section>
            </Fragment>
          )}
        </div>
      );
    }
  });
  return <div className={styles.profile}>{profileInfo}</div>;
};

export default UserPage;
