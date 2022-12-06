export const endpoints = {
  AuthService: {
    signUp: (): string => '/auth-api/rb/user/',
    getUserByToken: (): string => '/auth-api/rb/user/me/',
    signIn: (): string => '/auth-api/rb/user/login/token/',
    getProfile: (): string => '/auth-api/rb/profile/profile/me',
    editProfile: (): string => '/auth-api/rb/profile/profile/me/',
    getProfileByToken: (): string => '/auth-api/rb/profile/profile/me',
    getByUsername: (username: string): string => `/auth-api/rb/profile/profile/${username}/`,
  },

  EventsService: {
    createEvent: (): string => '/events-api/rb/events/create_event/',
    getMyEvents: (): string => '/events-api/rb/events/get_my_events/',
    getEventById: (): string => '/events-api/rb/events/get_event_by_id/',
    editMyEvent: (): string => '/events-api/rb/events/update_my_event',
    deleteMyEvent: (): string => '/events-api/rb/events/delete_my_event',
    deleteInvitation: (): string => '/events-api/rb/events_invitation/delete_my_invitation',
    getEventInvitations: (): string => '/events-api/rb/events_invitation/get_my_invitations/',
    getEventsReminder: (): string => '/events-api/rb/events_reminder/get_my_event_reminders/',
    createEventInvitation: (): string => '/events-api/rb/events_invitation/create_invitation/',
    createEventsReminder: (): string => '/events-api/rb/events_reminder/create_events_reminder/',
  },

  ActivitiesService: {
    createActivityPost: (): string => '/activities-api/rb/activity_post/create_activity_post/',
    getActivityPostById: (): string =>
      '/activities-api/rb/activity_post/get_activity_post/post_id/',
    getActivityPostByUserId: (): string =>
      '/activities-api/rb/activity_post/get_activity_post/user_id/',
    getAllActivityPosts: (): string =>
      '/activities-api/rb/activity_post/get_activity_post/all_post/',
    updateActivityPost: (): string => '/activities-api/rb/activity_post/update_activity_post/',
    deleteActivityPost: (): string => '/activities-api/rb/activity_post/delete_activity_post/',
    createPostComment: (): string =>
      '/activities-api/rb/activity_post_comment/create_activity_post_comment/',
    getPostCommentById: (): string =>
      '/activities-api/rb/activity_post_comment/get_activity_post_comment/comment_id/',
    getPostCommentByParentPostId: (): string =>
      '/activities-api/rb/activity_post_comment/get_activity_post_comment/parent_post_id/',
    getPostCommentByParentCommentId: (): string =>
      '/activities-api/rb/activity_post_comment/get_activity_post_comments/parent_comment_comments/',
    editPostComment: (): string =>
      '/activities-api/rb/activity_post_comment/update_activity_post_comment/',
    deletePostComment: (): string =>
      '/activities-api/rb/activity_post_comment/delete_activity_post_comment/',
  },

  FriendsService: {
    inviteFriend: (): string => '/friends-api/rb/friends/invite_friend/',
    updateFriendStatus: (): string => '/friends-api/rb/friends/update_friend_status/',
    getFriendsByUserId: (): string => '/friends-api/rb/friends/get_friends_by_user_id/',
  },

  LakesService: {
    getLake: (): string => '/lakes-api/rb/lakes/get_lake/',
    addFavoriteLake: (): string => '/lakes-api/rb/lakes/add_favorite_lake/',
    removeFromFavoriteLake: (): string => '/lakes-api/rb/lakes/delete_favorite_lake',
    getMyFavoriteLake: (): string => '/lakes-api/rb/lakes/get_my_favorite_lakes/',
  },
};
