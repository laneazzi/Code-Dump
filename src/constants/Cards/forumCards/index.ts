import { cardImg, cardImgThree, cardImgTwo, GuyImg, GuyImgTwo } from '../../../assets/img';

import { TForumCards } from './types';

export const forumCardsData: TForumCards[] = [
  {
    id: 1,
    isSaved: false,
    sharedCount: 4,
    userImg: GuyImg,
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
    isSaved: false,
    sharedCount: 4,
    commentsCount: 3,
    isVerified: false,
    userImg: GuyImgTwo,
    sharedUpCounts: 12,
    name: 'Username',
    nickName: '@Username',
    postedTime: '1 hour ago',
    postImg: [cardImgTwo, cardImg],
    postDescription: 'Post description 🐠',
  },
  {
    id: 3,
    userImg: GuyImg,
    sharedCount: 4,
    isSaved: false,
    isVerified: true,
    commentsCount: 3,
    name: 'Username',
    sharedUpCounts: 12,
    nickName: '@Username',
    postImg: cardImgThree,
    postedTime: '1 hour ago',
    postDescription: 'Post description simply dummy text of the printing 🐟 🐠',
  },
];
