export type TLake = {
  id?: number;
  lat: number;
  long: number;
  name: string;
  address: string;
  open_time: string;
  close_time: string;
};

export type TFavoriteLake = {
  lake_id: number;
  user_id: number;
};

export type TInitialState = {
  lake: TLake | null;
};
