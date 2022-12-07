export type TEvent = {
  id?: number;
  title: string;
  lake_id: number;
  user_id: number;
  address: string;
  location: string;
  is_active: boolean;
  description: string;
  source_type: string;
  location_url: string;
  scheduled_at: string;
  triggered_at: string;
  reminder_unit: number;
  reminder_count: number;
};

export type TEventReminder = {
  read: boolean;
  trash: boolean;
  user_id: number;
  content: string;
  event_id: number;
};

export type TInvitationParams = {
  friend_id: number;
  event_id: number;
};

export type TInvitationArgs = {
  status: string[];
  event_id: number;
  friend_id: number;
};

export type TInitialState = {
  events: TEvent[];
  loading: boolean;
  error: Error | null;
  currentEvent: TEvent | null;
  createdEvent: TEvent | null;
};

export type TInvitationResponse = {
  id: number;
  status: string;
  user_id: number;
  event_id: number;
  friend_id: number;
  created_at: Date | null;
  updated_at: Date | null;
};
