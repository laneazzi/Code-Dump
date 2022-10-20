import {
  highPostImg,
  topUserImg,
  topUserTwo,
  topUserThree,
  highPostTwoImg,
  highPostThreeImg,
} from 'assets/img';

import { THighTodayCards } from '../todayTopCards/types';

export const todayTopCards: THighTodayCards[] = [
  {
    id: 1,
    name: 'Username',
    userImg: topUserImg,
    postImg: highPostImg,
    nickName: '@Username',
  },
  {
    id: 2,
    name: 'Username',
    userImg: topUserTwo,
    nickName: '@Username',
    postImg: highPostTwoImg,
  },
  {
    id: 3,
    name: 'Username',
    nickName: '@Username',
    userImg: topUserThree,
    postImg: highPostThreeImg,
  },
];
