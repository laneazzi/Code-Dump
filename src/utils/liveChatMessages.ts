import { GuyImg, GuyImgTwo, UserImg } from 'assets/img';
import { TMessage } from 'types/global/messagesTypes';

export const liveChatMessages: TMessage[] = [
  { id: 1, message: 'Hello', userImg: GuyImg, userName: 'John' },
  { id: 2, message: "That's amazing", userImg: GuyImgTwo, userName: 'Jack' },
  { id: 3, message: 'Hi', userImg: UserImg, userName: 'Lena' },
  { id: 4, message: "What's up", userImg: GuyImg, userName: 'Mike' },
  { id: 5, message: "That's amazing", userImg: GuyImgTwo, userName: 'Jack' },
  { id: 6, message: 'I can help you', userImg: UserImg, userName: 'Lena' },
  { id: 7, message: "What's up", userImg: GuyImg, userName: 'Mike' },
];
