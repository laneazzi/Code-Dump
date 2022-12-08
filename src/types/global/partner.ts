export type TPartnerMoreInfo = {
  id: number;
  title: string;
  subtitle: string | number;
};

export type TPartner = {
  id: number;
  img: string;
  age: number;
  name: string;
  type: string;
  location: string;
  information: TPartnerMoreInfo[];
};
