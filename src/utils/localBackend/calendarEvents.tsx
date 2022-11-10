import { GuyImg, GuyImgTwo, UserImg } from 'assets/img';
import { TCalendarEvent } from 'types/global/calendarEvent';

export const calendarEvents: TCalendarEvent[] | [] = [
  {
    id: 1,
    title: GuyImg,
    date: new Date(2022, 10, 1),
  },
  {
    id: 2,
    title: UserImg,
    date: new Date(2022, 10, 1),
  },
  {
    id: 3,
    title: GuyImgTwo,
    date: new Date(2022, 10, 4),
  },
  {
    id: 4,
    title: GuyImg,
    date: new Date(2022, 11, 14),
  },
  {
    id: 5,
    title: UserImg,
    date: new Date(2022, 11, 4),
  },
  {
    id: 6,
    title: GuyImgTwo,
    date: new Date(2022, 11, 20),
  },
  {
    id: 7,
    title: GuyImg,
    date: new Date(2022, 9, 25),
  },
  {
    id: 8,
    title: UserImg,
    date: new Date(2022, 9, 8),
  },
  {
    id: 9,
    title: GuyImgTwo,
    date: new Date(2022, 9, 15),
  },
];
