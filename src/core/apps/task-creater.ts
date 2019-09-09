import { CreateTaskResponse, CreateTaskRequest } from "./task";
import Task from "../models/task";
import { CreateTaskRequester } from "./task";
import TaskGateway from "../gateways/task-gateway";

/**
 * Taskを作成する
 */
export default class TaskCreater implements CreateTaskRequester {
  public constructor(private gateway: TaskGateway) {}

  public async exec(req: CreateTaskRequest): Promise<CreateTaskResponse> {
    const task = new Task({
      title: req.title
    });
    return {
      task: await this.gateway.create(task)
    };
  }
}
