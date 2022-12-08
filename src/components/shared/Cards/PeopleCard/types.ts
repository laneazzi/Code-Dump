export type TPeopleCard = {
  id: number;
  userImg: string;
  status: boolean;
  userName: string;
  userStatus: boolean;
};

export type TPeopleCardProps = {
  status?: 'Pro';
  people: TPeopleCard;
  startTheChat: boolean;
  setStartTheChat: (value: boolean) => void;
};
