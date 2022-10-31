import {
  LivesIcon,
  LogOutIcon,
  EventsIcon,
  ProfileIcon,
  SettingsIcon,
  FavoritedIcon,
  AddNewPostIcon,
  HelpCenterIcon,
  TournamentIcon,
} from 'assets/icons';
import { Routes } from 'types';

export type THeaderDropDown = {
  id: number;
  path?: string;
  description: string;
  icon: React.ReactNode;
};

export const EventDropDownItems: THeaderDropDown[] = [
  { id: 1, icon: <AddNewPostIcon />, description: 'New Post' },
  { id: 2, icon: <LivesIcon />, description: 'New Live Stream' },
  { id: 3, icon: <EventsIcon />, description: 'Create Event' },
  { id: 4, icon: <TournamentIcon />, description: 'Create Tournament' },
];

export const ProfileDropDownItems: THeaderDropDown[] = [
  { id: 1, icon: <ProfileIcon />, description: 'Profile', path: Routes.Home },
  { id: 2, icon: <FavoritedIcon />, description: 'Favorited' },
  { id: 3, icon: <HelpCenterIcon />, description: 'Help Center', path: Routes.Help },
  { id: 5, icon: <LogOutIcon />, description: 'Logout', path: Routes.LogIn },
  { id: 4, icon: <SettingsIcon />, description: 'Settings' },
];
