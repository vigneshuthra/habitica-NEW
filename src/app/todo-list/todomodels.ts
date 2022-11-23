export type TodoTask = {
        task: string;
        type: string;
        status: TodoStatusType;

      };
      declare type TodoStatusType = 'ACTIVE' | 'DONE';
