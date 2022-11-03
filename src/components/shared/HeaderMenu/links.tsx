import { SettingsIcon, AddIcon, NotificationsIcon, SearchIcon } from 'assets/icons';

type TMenuLinks = {
  id: number;
  className: string;
  imageSrc: React.ReactNode;
  name: string;
};
const classes = 'menu-item';

export const menuLinks: TMenuLinks[] = [
  {
    id: 1,
    imageSrc: <SettingsIcon />,
    className: classes,
    name: 'user',
  },
  {
    id: 2,
    imageSrc: <AddIcon />,
    className: classes,
    name: 'add',
  },
  {
    id: 3,
    imageSrc: <NotificationsIcon />,
    className: classes,
    name: 'ring',
  },
  {
    id: 4,
    imageSrc: <SearchIcon />,
    className: classes,
    name: 'search',
  },
];
