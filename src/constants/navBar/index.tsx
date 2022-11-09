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
  { id: 1, icon: <ForumIcon />, url: Routes.Home, title: 'Home' },
  { id: 2, icon: <SearchIcon />, url: Routes.Search, title: 'Search' },
  { id: 3, icon: <EventsIcon />, url: Routes.Events, title: 'Events' },
  { id: 4, icon: <TournamentIcon />, url: Routes.Tournament, title: 'Tournament' },
  { id: 5, icon: <LivesIcon />, url: Routes.Lives, title: 'Lives' },
  { id: 6, icon: <ProfileIcon />, url: Routes.Profile, title: 'Profile' },
];
