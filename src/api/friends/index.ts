import { endpoints } from 'api/endpoints';
import { TFriend } from 'store/slices/friendsSlice/types';

import { client } from './../client';

export const inviteFriendRequest = (invite_friend: TFriend) =>
  client.post(endpoints.FriendsService.inviteFriend(), { invite_friend });

export const getFriendsByUserIdRequest = () =>
  client.get(endpoints.FriendsService.getFriendsByUserId());

export const updateFriendStatusRequest = (update_friend: TFriend) =>
  client.put(endpoints.FriendsService.updateFriendStatus(), { update_friend });
