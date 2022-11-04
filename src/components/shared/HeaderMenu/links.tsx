import { SettingsIcon, AddIcon, NotificationsIcon, SearchIcon } from 'assets/icons';

type TMenuLinks = {
  id: number;
  className: string;
  imageSrc: React.ReactNode;
  name: MenuLinkNames.CREATE | MenuLinkNames.RING | MenuLinkNames.USER | MenuLinkNames.SEARCH;
};
const classes = 'menu-item';

export enum MenuLinkNames {
  RING = 'RING',
  USER = 'USER',
  CREATE = 'CREATE',
  SEARCH = 'SEARCH',
}

export const menuLinks: TMenuLinks[] = [
  {
    id: 1,
    className: classes,
    name: MenuLinkNames.USER,
    imageSrc: <SettingsIcon />,
  },
  {
    id: 2,
    className: classes,
    imageSrc: <AddIcon />,
    name: MenuLinkNames.CREATE,
  },
  {
    id: 3,
    className: classes,
    name: MenuLinkNames.RING,
    imageSrc: <NotificationsIcon />,
  },
  {
    id: 4,
    className: classes,
    imageSrc: <SearchIcon />,
    name: MenuLinkNames.SEARCH,
  },
];
