export const endpoints = {
  AuthService: {
    signUp: (): string => '/auth-api/rb/user/',
    getUserByToken: (): string => '/auth-api/rb/user/me/',
    signIn: (): string => '/auth-api/rb/user/login/token/',
    getByUsername: (username: string): string => `/auth-api/rb/profile/profile/${username}/`,
  },
};
