import Task from "./models/task";
import CreateTaskRequest from "./models/create-task-request";

export default interface CreateTaskInteractor {
  handle(req: CreateTaskRequest): Promise<Task>;
}
