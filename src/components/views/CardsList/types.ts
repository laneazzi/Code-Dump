import { THighTodayCards } from 'constants/Cards/todayTopCards/types';

export type TCardsListProps = {
  title: string;
  inModal?: boolean;
  cardsList: THighTodayCards[];
};
