import { TFilter } from 'components/shared/Filter/types';

export const filterItems: TFilter[] = [
  { id: 0, name: 'Today' },
  { id: 1, name: 'This Week' },
  { id: 2, name: 'Next Week' },
  { id: 3, name: 'This Month' },
];

export const fishingGuideFilters: TFilter[] = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Guides' },
  { id: 2, name: 'Tours' },
  { id: 3, name: 'Courses' },
];

export const proUsersFilters: TFilter[] = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Online' },
];

export const partnersFilters: TFilter[] = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Boater' },
  { id: 2, name: 'Non Boater' },
];
