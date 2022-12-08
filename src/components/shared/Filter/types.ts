export type TFilter = {
  id: number;
  name: string;
  path?: string;
};

export type TFilterProps = {
  withSearch?: boolean;
  filterItems: TFilter[];
};
