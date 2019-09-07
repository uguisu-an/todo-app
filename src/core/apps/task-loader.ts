import { ListTaskRequester, ListTaskResponse } from "./task";
import TaskRepository from "../repositories/task-repository";

/**
 * Taskを読み込む
 */
export default class TaskLoader implements ListTaskRequester {
  public constructor(private respository: TaskRepository) {}

  public async exec(): Promise<ListTaskResponse> {
    return {
      tasks: await this.respository.getAll()
    };
  }
}
