export type TimeEntry = {
  mins: string;
  id: number;
};

export type PaceData = {
  speed: number;
  mins: string | number;
  fiveK: string;
  tenK: string;
  tenMile?: string;
  half: string;
  full: string;
};
