export type TTournament = {
  id?: number;
  title: string;
  lake_id: number;
  is_active: boolean;
  description: string;
  location_url: string;
  reminder_unit: number;
  reminder_count: number;
  scheduled_at: Date | string;
};

export type TInitialState = {
  tournaments: TTournament[];
};
