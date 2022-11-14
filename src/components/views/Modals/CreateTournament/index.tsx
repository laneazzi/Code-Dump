import { useContext } from 'react';

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

import { stateOptions, peopleOptions } from './options';

import styles from './CreateTournament.module.scss';

const CreateTournament = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_head}>CREATE TOURNAMENT</div>
        <div className={styles.container__content_main}>
          <div className={styles.container__content_main_left}>
            <EventInput title='Tournament Name' />
            <div className={styles.container__content_main_left_item}>
              <DatePickerSelect title='Date' />
              <HourPicker />
            </div>
            <div className={styles.container__content_main_left_item}>
              <CreateEventDropDown title='State' size='small' optionList={stateOptions} />
              <EventInput title='City' small />
            </div>
            <div className={styles.container__content_main_left_item}>
              <EventInput title='Location' small />
              <EventInput title='Contact Number' small />
            </div>
          </div>
          <div className={styles.container__content_main_right}>
            <div className={styles.container__content_main_right_item}>
              <TextArea />
            </div>
            <div className={styles.container__content_main_right_item}>
              <CreateEventDropDown title='People' size='small' optionList={peopleOptions} />
              <EventPrice placeholder='$' />
            </div>
            <div className={styles.container__content_main_right_elem}>
              <EventFile />
            </div>
          </div>
        </div>
        <div className={styles.container__content_footer}>
          <button onClick={closeModal}>Close</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTournament;
