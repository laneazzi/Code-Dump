import { FC, useState } from 'react';
import classNames from 'classnames';

import Button from 'components/shared/Button';
import Typography from 'components/shared/Typography';
import { PartnerInfoIcon, PartnerMessageIcon, SendSmallIcon } from 'assets/icons';

import { TPartnerCardProps } from './types';
import styles from './PartnerCard.module.scss';

const PartnerCard: FC<TPartnerCardProps> = ({ partner }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const cardClasses = classNames(styles.card, { [styles.card_active]: isActive });
  const backFaceFrontClasses = classNames(styles.card__front, styles.card__face);
  const backFaceBackClasses = classNames(styles.card__back, styles.card__face);

  const moreInfoDetails = partner?.information.map((info) => (
    <Typography key={info?.id} className={styles.card__back__main__item}>
      <Typography tagName='span' className={styles.card__back__main__item__title}>
        {info?.title}
      </Typography>
      <Typography tagName='span' className={styles.card__back__main__item__subtitle}>
        {info?.subtitle}
      </Typography>
    </Typography>
  ));

  const showInfo = () => {
    setIsActive(true);
  };

  const hideInfo = () => setIsActive(false);

  return (
    <div className={cardClasses}>
      <div className={backFaceFrontClasses}>
        <div className={styles.card__front__background}>
          <img src={partner.img} />
          <div className={styles.card__front__background__color} />
        </div>
        <div className={styles.card__front__content}>
          <div className={styles.card__front__content__description}>
            <Typography>
              <Typography tagName='span' className={styles.card__front__content__description__name}>
                {partner.name}
              </Typography>
              <Typography tagName='span' className={styles.card__front__content__description__age}>
                {partner.age}
              </Typography>
            </Typography>
            <Typography className={styles.card__front__content__description__location}>
              {partner.location}
            </Typography>
            <Typography className={styles.card__front__content__description__location}>
              {partner.type}
            </Typography>
          </div>
          <div className={styles.card__front__content__icons}>
            <PartnerInfoIcon onClick={showInfo} />
            <PartnerMessageIcon />
          </div>
        </div>
      </div>
      <div className={backFaceBackClasses} onClick={hideInfo}>
        <div className={styles.card__back__head}>
          <Typography>{partner.name}</Typography>
          <Button className={styles.card__back__head__btn}>
            <SendSmallIcon />
            Invite to Fish
          </Button>
        </div>
        <div className={styles.card__back__main}>{moreInfoDetails}</div>
      </div>
    </div>
  );
};

export default PartnerCard;
