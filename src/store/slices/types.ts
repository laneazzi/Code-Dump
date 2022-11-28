export type TNewUser = {
  email: string;
  password: string;
  username: boolean;
};

export type TUser = {
  new_user: TNewUser;
};

export type TInitialState = {
  error: Error | null;
  userData: TUserInfo | {};
  users: TUser[];
  loading: string;
};

type AccessToken = {
  access_token: string;
  token_type: string;
};

type Profile = {
  id: number;
  bio: string;
  full_name: string;
  image: string;
  phone_number: string;
  home_lake: string;
  active_boater: boolean;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  banner_image: string;
  fishing_strengths: string;
  fishing_accolades: string;
  available_for_fishing: boolean;
  social_media_platforms: string;
  favorite_fishing_techniques: string;
};

export type TUserInfo = {
  email: string;
  username: string;
  email_verified: boolean;
  is_active: boolean;
  is_superuser: boolean;
  created_at: Date;
  updated_at: Date;
  id: number;
  access_token: AccessToken;
  profile: Profile;
};
