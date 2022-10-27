export type TMessage = {
  id: number;
  userImg: string;
  message: string;
  userName: string;
  shareCount?: number;
  publishedTime?: string;
};

export type TComments = {
  id: number;
  userImg: string;
  message: string;
  userName: string;
  shareCount?: number;
  replies: TMessage[];
  publishedTime?: string;
};
