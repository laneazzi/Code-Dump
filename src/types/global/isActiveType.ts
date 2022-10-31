export enum IsActiveType {
  RECOVERY = 'RECOVERY',
  REGISTRATION = 'REGISTRATION',
}

export type TIsActiveType = {
  [IsActiveType.RECOVERY]: boolean;
  [IsActiveType.REGISTRATION]: boolean;
};
