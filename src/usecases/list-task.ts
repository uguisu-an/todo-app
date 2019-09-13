import Task from "./models/task";

export interface ListTaskInteractor {
  handle(): Promise<Task[]>;
}
