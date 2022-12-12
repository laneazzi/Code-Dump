import { FC, useContext, useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks';
import { ModalContext } from 'context/Modal';
import { ForumCard, PostModal } from 'components';
import { TNewPostComment, TPost } from 'store/slices/activitiesSlice/types';
import {
  createPostComment,
  deletePostComment,
  deleteActivityPost,
  getPostCommentByParentPostId,
} from 'store/slices/activitiesSlice/activitiesThunks';

import { TPostProps } from './types';

const Post: FC<TPostProps> = ({ card }) => {
  const dispatch = useAppDispatch();
  const { closeModal, openModal } = useContext(ModalContext);

  const [commentList, setCommentList] = useState<TNewPostComment[] | []>([]);

  const addComment = async (comment: TNewPostComment) => {
    await dispatch(createPostComment(comment)).unwrap();
    getComments();
  };

  const replyComment = async (comment: TNewPostComment) => {
    await dispatch(createPostComment(comment)).unwrap();

    getComments();
  };

  const removeComment = async (commentId: number, postId: number) => {
    await dispatch(
      deletePostComment({
        activity_post_comment_id: commentId as number,
        postId: postId as number,
      }),
    );

    getComments();
  };

  const getComments = async () => {
    const comment = await dispatch(
      getPostCommentByParentPostId({ parent_post_id: card?.id, limit: 50, offset: 0 }),
    ).unwrap();

    setCommentList(comment);
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = (id: number) => {
    closeModal();
    dispatch(deleteActivityPost(id));
  };

  const openPost = (post: TPost) =>
    openModal(
      <PostModal
        post={post}
        comments={commentList}
        deletePost={deletePost}
        addComment={addComment}
        replyComment={replyComment}
        removeComment={removeComment}
      />,
    );

  return (
    <ForumCard
      key={card.id}
      card={card}
      openPost={openPost}
      comments={commentList}
      deletePost={deletePost}
    />
  );
};

export default Post;
