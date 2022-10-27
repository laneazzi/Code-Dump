import { GuyImg, GuyImgTwo, UserImg } from 'assets/img';
import { TMessage } from 'types/global/messagesTypes';

export const messages: TMessage[] = [
  { id: 1, message: 'Hello', userImg: GuyImg, userName: 'John' },
  { id: 2, message: "That's amazing", userImg: GuyImgTwo, userName: 'Jack' },
  { id: 3, message: 'Hi', userImg: UserImg, userName: 'Lena' },
  { id: 4, message: "What's up", userImg: GuyImg, userName: 'Mike' },
];
