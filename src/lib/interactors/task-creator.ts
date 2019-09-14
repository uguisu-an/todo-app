import TaskRepository from "../gateways/task-repository";
import CreateTaskInteractor from "../usecases/create-task";
import CreateTaskRequest from "../models/create-task-request";
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
