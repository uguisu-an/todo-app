import TaskRepository from "../gateways/task-repository";
import CreateTaskInteractor, {
  CreateTaskRequest
} from "../usecases/create-task";
import Task from "../models/task";

export default class TaskCreater implements CreateTaskInteractor {
  public constructor(private tasks: TaskRepository) {}

  public async handle(task: CreateTaskRequest): Promise<Task> {
    const t = await this.tasks.create(task);
    return {
      id: t.id!,
      title: t.title
    };
  }
}
