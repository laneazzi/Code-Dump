import {
  TextArea,
  EventFile,
  EventInput,
  EventPrice,
  HourPicker,
  DatePickerSelect,
  CreateEventDropDown,
} from 'components';

import styles from './CreateEvent.module.scss';

const CreateEvent = () => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_head}>CREATE EVENT</div>
      <div className={styles.container__content_main}>
        <div className={styles.container__content_main_left}>
          <EventInput title='Event Name' />
          <div className={styles.container__content_main_left_item}>
            <DatePickerSelect title='Date' />
            <HourPicker />
          </div>
          <div className={styles.container__content_main_left_item}>
            <CreateEventDropDown title='State' size='small' />
            <CreateEventDropDown title='City' size='small' />
          </div>
          <div className={styles.container__content_main_left_item}>
            <EventInput title='Address' small />
            <EventInput title='Number' small />
          </div>
        </div>
        <div className={styles.container__content_main_right}>
          <div className={styles.container__content_main_right_item}>
            <TextArea />
          </div>
          <div className={styles.container__content_main_right_item}>
            <CreateEventDropDown title='People' size='small' />
            <EventPrice />
          </div>
          <div className={styles.container__content_main_right_elem}>
            <EventFile />
          </div>
        </div>
      </div>
      <div className={styles.container__content_footer}>
        <button>Clean</button>
        <button>Create</button>
      </div>
    </div>
  </div>
);

export default CreateEvent;
