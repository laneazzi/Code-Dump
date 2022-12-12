import React, { useContext, useState } from 'react';

import { ModalContext } from 'context/Modal';
import {
  Button,
  TextArea,
  EventFile,
  EventInput,
  EventPrice,
  HourPicker,
  DatePickerSelect,
  CreateEventDropDown,
} from 'components';
import { TEvent } from 'store/slices/eventsSlice/types';
import { useAppDispatch, useAppSelector, useInputValidate } from 'hooks';
import { createEvent } from 'store/slices/eventsSlice/eventsThunks';

import { stateOptions, peopleOptions } from '../options';

import styles from './CreateEvent.module.scss';

const CreateEvent = () => {
  const { closeModal } = useContext(ModalContext);
  const dispatch = useAppDispatch();
  const title = useInputValidate('');
  const price = useInputValidate('');
  const address = useInputValidate('');
  const location = useInputValidate('');
  const contacts = useInputValidate('');
  const description = useInputValidate('');
  const [eventTime, setEventTime] = useState({ time: '', date: '' });

  const condition =
    title.isValid &&
    price.isValid &&
    address.isValid &&
    location.isValid &&
    contacts.isValid &&
    description.isValid;

  const getDate = (date: string) => {
    setEventTime({ ...eventTime, date: date });
  };

  const getTime = (time: string, timeFormat: string) => {
    const eventSchedule = `${time} ${timeFormat}`;

    setEventTime({ ...eventTime, time: eventSchedule });
  };

  const { userData } = useAppSelector((state) => state.auth);

  const addEvent = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEvent: TEvent = {
      lake_id: 6,
      is_active: true,
      reminder_unit: 0,
      reminder_count: 0,
      title: title.value,
      source_type: 'string',
      triggered_at: 'string',
      address: address.value,
      location: location.value,
      description: description.value,
      user_id: userData?.id as number,
      scheduled_at: `${eventTime?.date} - ${eventTime?.time}`,
      location_url: 'https://bcparks.ca/photos/images/0154-00HQLD0001.jpg',
    };

    dispatch(createEvent(newEvent));

    closeModal();
  };

  return (
    <div className={styles.container}>
      <form className={styles.container__content} onSubmit={addEvent}>
        <div className={styles.container__content_head}>CREATE EVENT</div>
        <div className={styles.container__content_main}>
          <div className={styles.container__content_main_left}>
            <EventInput title='Event Name' field={title} />
            <div className={styles.container__content_main_left_item}>
              <DatePickerSelect title='Date' getDate={getDate} />
              <HourPicker getTime={getTime} />
            </div>
            <div className={styles.container__content_main_left_item}>
              <CreateEventDropDown title='State' size='small' optionList={stateOptions} />
              <EventInput title='City' small field={address} />
            </div>
            <div className={styles.container__content_main_left_item}>
              <EventInput title='Location' small name='location' field={location} />
              <EventInput title='Contact Number' field={contacts} small type='number' />
            </div>
          </div>
          <div className={styles.container__content_main_right}>
            <div className={styles.container__content_main_right_item}>
              <TextArea name='description' field={description} />
            </div>
            <div className={styles.container__content_main_right_item}>
              <CreateEventDropDown title='People' size='small' optionList={peopleOptions} />
              <EventPrice placeholder='Free' field={price} />
            </div>
            <div className={styles.container__content_main_right_elem}>
              <EventFile />
            </div>
          </div>
        </div>
        <div className={styles.container__content_footer}>
          <Button onClick={closeModal} className={styles.container__content_footer_close}>
            Close
          </Button>
          <Button
            type='submit'
            disabled={!condition}
            className={styles.container__content_footer_submit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
