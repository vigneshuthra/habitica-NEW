export type DailyTask = {
    type: string;
    task : string;
    status: DailyStatusType;
  };
  export declare type DailyStatusType = 'DUE' | 'NOT_DUE';
