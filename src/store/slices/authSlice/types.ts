export type TNewUser = {
  email: string;
  password: string;
  username: boolean;
};

export type TUser = {
  new_user: TNewUser;
};

export type TInitialState = {
  users: TUser[];
  error: Error | null;
  rememberMe: boolean;
  loading: boolean;
  userData: TUserInfo | null;
};

export type TAccessToken = {
  token_type: string;
  access_token: string;
};

type Profile = {
  id: number;
  bio: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  home_lake: string;
  full_name: string;
  phone_number: string;
  banner_image: string;
  active_boater: boolean;
  fishing_strengths: string;
  fishing_accolades: string;
  available_for_fishing: boolean;
  social_media_platforms: string;
  favorite_fishing_techniques: string;
};

export type TUserInfo = {
  id: number;
  email: string;
  username: string;
  created_at: Date;
  updated_at: Date;
  profile: Profile;
  is_active: boolean;
  is_superuser: boolean;
  email_verified: boolean;
  access_token: TAccessToken;
};
