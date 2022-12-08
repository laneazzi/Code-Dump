import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import { BlueArrowIcon } from 'assets/icons';
import { hourCreator, minutesCreator } from 'utils/timeCreators';

import styles from './HourPicker.module.scss';
import { THourPickerProps } from './types';

const HourPicker: FC<THourPickerProps> = ({ getTime }) => {
  const [time, setTime] = useState({ hour: 0, minute: 0, type: 'AM' });

  useEffect(() => {
    if (time) {
      getTime?.(time?.hour.toString(), time?.type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const [isActive, setIsActive] = useState({ hour: false, minutes: false, type: false });

  const changeTime = () =>
    setIsActive({ ...isActive, hour: !isActive.hour, minutes: false, type: false });

  const changeMinute = () =>
    setIsActive({ ...isActive, minutes: !isActive.minutes, hour: false, type: false });

  const changeType = () =>
    setIsActive({ ...isActive, type: !isActive.type, hour: false, minutes: false });

  const minutes = minutesCreator();

  const activeHourClasses = classNames(styles.container__content_hours_item, {
    [styles.container__content_hours_item_hour]: isActive.hour,
  });

  const activeMinuteClasses = classNames(styles.container__content_hours_item, {
    [styles.container__content_hours_item_minute]: isActive.minutes,
  });

  const activeTypeClasses = classNames(styles.container__content_hours_item, {
    [styles.container__content_hours_item_type]: isActive.type,
  });

  const setHour = (hour: number) => {
    setTime({ ...time, hour: hour });
  };

  const setMinute = (minute: number) => {
    setTime({ ...time, minute: minute });
  };

  const setType = (type: string) => {
    setTime({ ...time, type: type, hour: 0, minute: 0 });
  };

  const hourItems = hourCreator(time.type)?.map((hour, idx) => {
    if (hour < 10) {
      return (
        <p key={idx} onClick={() => setHour(hour)}>
          0{hour}
        </p>
      );
    } else {
      return (
        <p key={idx} onClick={() => setHour(hour)}>
          {hour}
        </p>
      );
    }
  });

  const minutesItems = minutes.map((minute, idx) => {
    if (minute < 10) {
      return (
        <p key={idx} onClick={() => setMinute(minute)}>
          0{minute}
        </p>
      );
    } else {
      return (
        <p key={idx} onClick={() => setMinute(minute)}>
          {minute}
        </p>
      );
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_title}>Hour</div>
        <div className={styles.container__content_hours}>
          <div className={activeHourClasses} onClick={changeTime}>
            {time.hour < 10 ? `0${time.hour}` : time.hour}
            <BlueArrowIcon className={styles.container__content_hours_icon} />
            <div className={styles.container__content_hours_item_list}>{hourItems}</div>
          </div>

          <div className={activeMinuteClasses} onClick={changeMinute}>
            {time.minute < 10 ? `0${time.minute}` : time.minute}
            <BlueArrowIcon className={styles.container__content_hours_icon} />
            <div className={styles.container__content_hours_item_list}>{minutesItems}</div>
          </div>
          <div onClick={changeType} className={activeTypeClasses}>
            {time.type}
            <BlueArrowIcon className={styles.container__content_hours_icon} />
            <div className={`${styles.container__content_hours_item_list} ${styles.types__menu}`}>
              <p onClick={() => setType('AM')}>AM</p>
              <p onClick={() => setType('PM')}>PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourPicker;
