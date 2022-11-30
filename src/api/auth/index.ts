import { client } from 'api/client';
import { endpoints } from 'api/endpoints';

export const signInRequest = (user: FormData) => client.post(endpoints.AuthService.signIn(), user);

export const getUserByTokenRequest = () => client.get(endpoints.AuthService.getUserByToken());

export const signUpRequest = (user: any) =>
  client.post(endpoints.AuthService.signUp(), {
    new_user: user,
  });

export const getByUserNameRequest = (username: string) =>
  client.get(endpoints.AuthService.getByUsername(username));

export const getProfileByTokenRequest = () => client.get(endpoints.AuthService.getProfileByToken());

export const editProfileRequest = (options: any) =>
  client.put(endpoints.AuthService.editProfile(), {
    profile_update: options,
  });
