import { cardImg, cardImgThree, cardImgTwo, GuyImg, GuyImgTwo } from '../../../assets/img';

import { TForumCards } from './types';

export const forumCardsData: TForumCards[] = [
  {
    id: 1,
    userImg: GuyImg,
    isSaved: false,
    sharedCount: 4,
    isVerified: true,
    commentsCount: 5,
    postImg: cardImg,
    name: 'Username',
    sharedUpCounts: 12,
    nickName: '@Username',
    postedTime: '1 hour ago',
    postDescription: 'Post description simply dummy text of the printing 🐟 🐠',
  },
  {
    id: 2,
    userImg: GuyImgTwo,
    isVerified: false,
    postedTime: '1 hour ago',
    isSaved: false,
    commentsCount: 3,
    sharedCount: 4,
    sharedUpCounts: 12,
    postImg: cardImgTwo,
    postDescription: 'Post description 🐠',
    name: 'Username',
    nickName: '@Username',
  },
  {
    id: 3,
    userImg: GuyImg,
    isVerified: true,
    postedTime: '1 hour ago',
    isSaved: false,
    commentsCount: 3,
    sharedCount: 4,
    sharedUpCounts: 12,
    postImg: cardImgThree,
    postDescription: 'Post description simply dummy text of the printing 🐟 🐠',
    name: 'Username',
    nickName: '@Username',
  },
];
