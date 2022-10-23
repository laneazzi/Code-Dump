import {
  ForumIcon,
  LivesIcon,
  SearchIcon,
  EventsIcon,
  ProfileIcon,
  TournamentIcon,
} from 'assets/icons';
import { Routes } from 'types';

export const navBarLinks = [
  { id: 1, icon: <ForumIcon />, url: Routes.Home },
  { id: 2, icon: <SearchIcon />, url: Routes.Search },
  { id: 3, icon: <EventsIcon />, url: Routes.Events },
  { id: 4, icon: <TournamentIcon />, url: Routes.Tournament },
  { id: 5, icon: <LivesIcon />, url: Routes.Lives },
  { id: 6, icon: <ProfileIcon />, url: Routes.Profile },
];
