import {
  AddNewPostIcon,
  EventsIcon,
  HelpCenterIcon,
  LivesIcon,
  LogOutIcon,
  ProfileIcon,
  SaveIcon,
  SettingsIcon,
  TournamentIcon,
} from 'assets/icons';

export type THeaderDropDown = {
  id: number;
  description: string;
  icon: React.ReactNode;
};

export const createDropDown: THeaderDropDown[] = [
  { id: 1, icon: <AddNewPostIcon />, description: 'New Post' },
  { id: 2, icon: <LivesIcon />, description: 'New Live Stream' },
  { id: 3, icon: <EventsIcon />, description: 'Create Event' },
  { id: 4, icon: <TournamentIcon />, description: 'Create Tournament' },
];

export const createProfileDropDown: THeaderDropDown[] = [
  { id: 1, icon: <ProfileIcon />, description: 'Profile' },
  { id: 2, icon: <SaveIcon />, description: 'Favorited' },
  { id: 3, icon: <HelpCenterIcon />, description: 'Help Center' },
  { id: 5, icon: <LogOutIcon />, description: 'Logout' },
  { id: 4, icon: <SettingsIcon />, description: 'Settings' },
];
