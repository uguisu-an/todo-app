import { ListTaskRequester, ListTaskResponse } from "./task";
import TaskGateway from "../gateways/task-gateway";

/**
 * Taskを読み込む
 */
export default class TaskLoader implements ListTaskRequester {
  public constructor(private gateway: TaskGateway) {}

  public async exec(): Promise<ListTaskResponse> {
    return {
      tasks: await this.gateway.getAll()
    };
  }
}
