import {
  topUserImg,
  topUserTwo,
  highPostImg,
  topUserThree,
  highPostTwoImg,
  highPostSixImg,
  highPostFourImg,
  highPostFiveImg,
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

export const recommendedPosts: THighTodayCards[] = [
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

  {
    id: 4,
    name: 'Username',
    nickName: '@Username',
    userImg: topUserThree,
    postImg: highPostFourImg,
  },
  {
    id: 5,
    name: 'Username',
    nickName: '@Username',
    userImg: topUserThree,
    postImg: highPostFiveImg,
  },
  {
    id: 6,
    name: 'Username',
    nickName: '@Username',
    userImg: topUserThree,
    postImg: highPostSixImg,
  },
];
