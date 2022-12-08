import React, { useContext, useState } from 'react';

import { ModalContext } from 'context/Modal';
import {
  TextArea,
  EventFile,
  EventInput,
  EventPrice,
  HourPicker,
  DatePickerSelect,
  CreateEventDropDown,
} from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { TEvent } from 'store/slices/eventsSlice/types';
import { createEvent } from 'store/slices/eventsSlice/eventsThunks';

import { stateOptions, peopleOptions } from '../options';

import styles from './CreateEvent.module.scss';

const CreateEvent = () => {
  const { closeModal } = useContext(ModalContext);
  const [eventTime, setEventTime] = useState({ time: '', date: '' });
  const dispatch = useAppDispatch();

  const [event, setEvent] = useState({
    title: '',
    address: '',
    location: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setEvent({ ...event, [name]: value });
  };

  const getDate = (date: string) => {
    setEventTime({ ...eventTime, date: date });
  };

  const getTime = (time: string, timeFormat: string) => {
    const eventSchedule = `${time} ${timeFormat}`;

    setEventTime({ ...eventTime, time: eventSchedule });
  };

  const { userData } = useAppSelector((state) => state.auth);

  const addEvent = () => {
    const newEvent: TEvent = {
      lake_id: 6,
      is_active: true,
      reminder_unit: 0,
      reminder_count: 0,
      source_type: 'string',
      triggered_at: 'string',
      user_id: userData?.id as number,
      scheduled_at: `${eventTime?.date} - ${eventTime?.time}`,
      location_url: 'https://bcparks.ca/photos/images/0154-00HQLD0001.jpg',
      ...event,
    };

    const condition = event?.title.trim() && eventTime?.date.trim() && eventTime?.time.trim();

    if (condition) {
      dispatch(createEvent(newEvent));
      closeModal();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_head}>CREATE EVENT</div>
        <div className={styles.container__content_main}>
          <div className={styles.container__content_main_left}>
            <EventInput title='Event Name' name='title' onChange={handleChange} />
            <div className={styles.container__content_main_left_item}>
              <DatePickerSelect title='Date' getDate={getDate} />
              <HourPicker getTime={getTime} />
            </div>
            <div className={styles.container__content_main_left_item}>
              <CreateEventDropDown title='State' size='small' optionList={stateOptions} />
              <EventInput title='City' small />
            </div>
            <div className={styles.container__content_main_left_item}>
              <EventInput title='Location' small name='location' onChange={handleChange} />
              <EventInput title='Contact Number' small />
            </div>
          </div>
          <div className={styles.container__content_main_right}>
            <div className={styles.container__content_main_right_item}>
              <TextArea name='description' onChange={handleChange} />
            </div>
            <div className={styles.container__content_main_right_item}>
              <CreateEventDropDown title='People' size='small' optionList={peopleOptions} />
              <EventPrice placeholder='Free' />
            </div>
            <div className={styles.container__content_main_right_elem}>
              <EventFile />
            </div>
          </div>
        </div>
        <div className={styles.container__content_footer}>
          <button onClick={closeModal}>Close</button>
          <button onClick={addEvent}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
