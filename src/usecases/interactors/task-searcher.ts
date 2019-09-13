import ListTaskInteractor from "@/usecases/list-task";
import TaskRepository from "@/entities/repositories/task-repository";
import Task from "../models/task";
import TaskEntity from "@/entities/task";

export default class TaskSearcher implements ListTaskInteractor {
  public constructor(private repository: TaskRepository) {}

  public async handle(): Promise<Task[]> {
    const tasks = await this.repository.getAll();
    return tasks.map(toTask);
  }
}

function toTask(task: TaskEntity) {
  return {
    id: task.id!,
    title: task.title
  };
}
