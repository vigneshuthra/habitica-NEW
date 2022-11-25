export type DailyTask = {
    type: string;
    task : string;
    status: DailyStatusType;
  };
  declare type DailyStatusType = 'DUE' | 'NOT_DUE';
