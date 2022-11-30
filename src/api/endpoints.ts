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
};
