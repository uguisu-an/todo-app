import Task from "./models/task";

export default interface ListTaskInteractor {
  handle(): Promise<Task[]>;
}
