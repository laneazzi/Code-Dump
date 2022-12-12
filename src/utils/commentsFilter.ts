import { TNewPostCommentParent, TNewPostCommentResponse } from 'store/slices/activitiesSlice/types';

type TParent = {
  [key: string]: TNewPostCommentParent;
};

type TNewObj = {
  [key: string]: number;
};

const newObj: TNewObj = {};

export const commentsFilter = (arr: TNewPostCommentResponse[]) => {
  const parent: TParent = {};

  for (const message of [...arr].reverse()) {
    if (message.on_main_post) {
      if (!parent[message.id]) {
        parent[message.id] = { ...message, replies: [] };
      }
    } else {
      if (newObj[message.parent_comment_id]) {
        const id = newObj[message.parent_comment_id];
        newObj[message.id] = id;
        parent[id]?.replies.push(message);
      } else {
        newObj[message.id] = message.parent_comment_id;
        parent[message.parent_comment_id]?.replies.push(message);
      }
    }
  }

  return Object.values(parent);
};
