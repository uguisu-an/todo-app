import {
  ListTaskInteractor,
  ListTaskRequest,
  ListTaskResponse
} from "@/usecases/list-task";
import TaskRepository from "@/entities/repositories/task-repository";

export default class TaskSearcher implements ListTaskInteractor {
  public constructor(private repository: TaskRepository) {}

  public async handle(_req: ListTaskRequest): Promise<ListTaskResponse> {
    const tasks = await this.repository.getAll();
    return {
      tasks: tasks.map(t => ({ id: t.id!, title: t.title }))
    };
  }
}
