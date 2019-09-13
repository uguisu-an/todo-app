import TaskRepository from "@/entities/repositories/task-repository";
import CreateTaskInteractor from "../create-task";
import CreateTaskRequest from "../models/create-task-request";
import Task from "../models/task";

export default class TaskCreater implements CreateTaskInteractor {
  public constructor(private repository: TaskRepository) {}

  public async handle(task: CreateTaskRequest): Promise<Task> {
    const t = await this.repository.save(task);
    return {
      id: t.id!,
      title: t.title
    };
  }
}
