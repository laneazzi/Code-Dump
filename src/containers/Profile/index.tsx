import { Fragment, useMemo, useState } from 'react';

import { cardImgTwo } from 'assets/img';
import { CalendarPicker, VideoCard } from 'components';
import {
  ProfileBio,
  VideoFilter,
  ProfileStatus,
  ProfileSideImg,
} from 'components/shared/ProfileComponents';
import { profileVideosData } from 'utils/localBackend/profileVideosData';

import styles from './Profile.module.scss';

const Profile = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const profileVideos = useMemo(
    () => profileVideosData.map((video) => <VideoCard key={video.id} video={video.video} />),
    [],
  );

  return (
    <div className={styles.profile}>
      <div className={styles.profile__content}>
        <section className={styles.profile__content_head}>
          <ProfileStatus
            isActive={isActive}
            setIsActive={setIsActive}
            className={styles.profile__content_head_user}
            frameClassName={styles.profile__content_head_frame}
          />
          <ProfileSideImg img={cardImgTwo} className={styles.profile__content_head_background} />
        </section>

        <Fragment>
          <section className={styles.profile__content_info}>
            <ProfileBio info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 😄🐠" />
          </section>
          <section className={styles.profile__content_filter}>
            <VideoFilter videoCount={profileVideosData.length} livesCount={0} />
          </section>
          <section className={styles.profile__content_videos}>{profileVideos}</section>
          <CalendarPicker />
        </Fragment>
      </div>
    </div>
  );
};

export default Profile;
