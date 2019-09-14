import ListTaskInteractor from "@/lib/usecases/list-task";
import Task from "../models/task";
import TaskEntity from "@/lib/entities/task";
import TaskRepository from "../gateways/task-repository";

export default class TaskSearcher implements ListTaskInteractor {
  public constructor(private tasks: TaskRepository) {}

  public async handle(): Promise<Task[]> {
    const tasks = await this.tasks.getAll();
    return tasks.map(toTask);
  }
}

function toTask(task: TaskEntity) {
  return {
    id: task.id!,
    title: task.title
  };
}
