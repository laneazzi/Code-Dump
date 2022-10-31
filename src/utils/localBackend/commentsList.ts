import { GuyImg, GuyImgTwo } from 'assets/img';

import { TComments } from './../../types/global/messagesTypes';

export const commentsList: TComments[] = [
  {
    id: 1,
    replies: [],
    shareCount: 5,
    userImg: GuyImg,
    message: 'content',
    userName: 'Username',
    publishedTime: '5minutesAgo',
  },

  {
    id: 2,
    shareCount: 5,
    userImg: GuyImg,
    message: 'content',
    userName: 'Username',
    publishedTime: '5minutesAgo',
    replies: [
      {
        id: 1,
        shareCount: 5,
        message: 'content',
        userImg: GuyImgTwo,
        userName: 'Username',
        publishedTime: '5minutesAgo',
      },
      {
        id: 2,
        shareCount: 5,
        userImg: GuyImgTwo,
        message: 'content',
        userName: 'Username',
        publishedTime: '5minutesAgo',
      },
    ],
  },
  {
    id: 3,
    shareCount: 5,
    userImg: GuyImg,
    message: 'content',
    userName: 'Username',
    publishedTime: '5minutesAgo',
    replies: [],
  },
];
