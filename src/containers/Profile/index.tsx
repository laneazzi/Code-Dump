import { Fragment, useMemo, useState } from 'react';

import { CalendarPicker, VideoCard } from 'components';
import {
  ProfileBio,
  VideoFilter,
  ProfileStatus,
  ProfileSideImg,
} from 'components/shared/ProfileComponents';
import { useAppSelector } from 'hooks';
import { TUserInfo } from 'store/slices/authSlice/types';
import { profileVideosData } from 'utils/localBackend/profileVideosData';

import styles from './Profile.module.scss';

const Profile = () => {
  const { userData } = useAppSelector((state) => state.auth);

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
            data={userData as TUserInfo}
            isActive={isActive}
            setIsActive={setIsActive}
            className={styles.profile__content_head_user}
            frameClassName={styles.profile__content_head_frame}
          />
          <ProfileSideImg
            img={userData?.profile?.banner_image}
            className={styles.profile__content_head_background}
          />
        </section>

        <Fragment>
          <section className={styles.profile__content_info}>
            <ProfileBio info={userData?.profile?.bio ? userData?.profile?.bio : 'No Bio'} />
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
