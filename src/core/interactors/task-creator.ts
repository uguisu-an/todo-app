import {
  CreateTaskInteractor,
  CreateTaskRequest,
  CreateTaskResponse
} from "../usecases/create-task";
import TaskRepository from "../repositories/task-repository";

export default class TaskCreater implements CreateTaskInteractor {
  public constructor(private repository: TaskRepository) {}

  public async handle(req: CreateTaskRequest): Promise<CreateTaskResponse> {
    const t = await this.repository.save(req);
    return {
      id: t.id!,
      title: t.title
    };
  }
}
