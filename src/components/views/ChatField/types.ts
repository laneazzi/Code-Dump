import { TNewPostComment } from 'store/slices/activitiesSlice/types';

export interface IEmoji {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
  shortcodes: string;
  emoticons: string[];
}

export type TChatFieldProps = {
  postId?: number;
  isReply?: boolean;
  setIsReply?: React.Dispatch<React.SetStateAction<boolean>>;
  repliedId?: number;
  type?: 'global' | 'inLive';
  addComment?: (comment: TNewPostComment) => void;
  replyComment?: (comment: TNewPostComment) => void;
};
