export type HabitTask = {
        task: string;
        type: string;
        status: HabitStatusType
      };

      declare type HabitStatusType = 'STRONG' | 'WEAK';
