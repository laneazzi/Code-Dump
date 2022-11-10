import { useState } from 'react';

import { NextMonthCalendarIcon, PrevMonthCalendarIcon } from 'assets/icons';
import {
  range,
  Months,
  nextMonth,
  prevMonth,
  getDaysInMonth,
  dateFormatting,
  datesAreOnSameDay,
} from 'utils/calendar';
import { calendarEvents } from 'utils/localBackend';

import Typography from '../Typography';
import UserImgFrame from '../UserImgFrame';

import styles from './CalendarPicker.module.scss';

const CalendarPicker = () => {
  const [now, setNow] = useState(new Date());

  const days = getDaysInMonth(now);

  const calendarItems = range(days).map((day) => (
    <div key={day} className={styles.calendar__case_box}>
      <span className={styles.calendar__case_box_day}>{dateFormatting(day)}</span>
      <div className={styles.calendar__case_box_events}>
        {calendarEvents?.map((ev) => {
          const currentDate = new Date(now.getFullYear(), now.getMonth(), day);

          if (datesAreOnSameDay(ev.date, currentDate)) {
            return (
              <UserImgFrame
                className={styles.calendar__case_box_events_item}
                innerClassName={styles.img}
                key={ev.id}
                img={ev?.title}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  ));

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar__navbar}>
        <Typography className={styles.calendar__navbar_title}>Calendar</Typography>
        <div className={styles.calendar__navbar_links}>
          <Typography className={styles.calendar__navbar_links_month}>
            {Months[now.getMonth()]}
          </Typography>
          <PrevMonthCalendarIcon
            onClick={() => prevMonth(now, setNow)}
            className={styles.calendar__navbar_links_item}
          />
          <NextMonthCalendarIcon
            onClick={() => nextMonth(now, setNow)}
            className={styles.calendar__navbar_links_item}
          />
        </div>
      </div>
      <div className={styles.calendar__case}>{calendarItems}</div>
    </div>
  );
};

export default CalendarPicker;
