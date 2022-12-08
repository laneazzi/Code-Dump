import {
  ForumIcon,
  LivesIcon,
  SearchIcon,
  EventsIcon,
  ProfileIcon,
  ProUsersIcon,
  TournamentIcon,
  FishingGuideIcon,
  TournamentPartnerIcon,
} from 'assets/icons';
import { Routes } from 'types';

export const navBarLinks = [
  { id: 1, icon: <ForumIcon />, url: Routes.Home, title: 'Home' },
  { id: 2, icon: <SearchIcon />, url: Routes.Search, title: 'Search' },
  { id: 3, icon: <FishingGuideIcon />, url: Routes.FishingGuide, title: 'Fishing Guide' },
  { id: 4, icon: <EventsIcon />, url: Routes.Events, title: 'Events' },
  { id: 5, icon: <ProUsersIcon />, url: Routes.ProUsers, title: 'Pro Users' },
  { id: 6, icon: <TournamentIcon />, url: Routes.Tournament, title: 'Tournament' },
  {
    id: 7,
    title: 'Tournament Partner',
    url: Routes.TournamentPartner,
    icon: <TournamentPartnerIcon />,
  },
  { id: 8, icon: <LivesIcon />, url: Routes.Lives, title: 'Lives' },
  { id: 9, icon: <ProfileIcon />, url: Routes.Profile, title: 'Profile' },
];
