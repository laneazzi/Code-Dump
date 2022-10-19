export enum EIsActiveType {
  RECOVERY = 'RECOVERY',
  REGISTRATION = 'REGISTRATION',
}

export type TIsActiveType = {
  [EIsActiveType.RECOVERY]: boolean;
  [EIsActiveType.REGISTRATION]: boolean;
};
