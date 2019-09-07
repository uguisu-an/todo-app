import { CreateTaskResponse, CreateTaskRequest } from "./task";
import Task from "../entities/task";
import TaskRepository from "../repositories/task-repository";
import { CreateTaskRequester } from "./task";

/**
 * Taskを作成する
 */
export default class TaskCreater implements CreateTaskRequester {
  public constructor(private repository: TaskRepository) {}

  public async exec(req: CreateTaskRequest): Promise<CreateTaskResponse> {
    const task = new Task({
      title: req.title
    });
    return {
      task: await this.repository.save(task)
    };
  }
}
