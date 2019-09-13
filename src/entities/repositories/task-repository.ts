import Task from "../task";
import TaskGateway from "@/usecases/gateways/task-gateway";

export default class TaskRepository {
  public constructor(private api: TaskGateway) {}

  public async getAll(): Promise<Task[]> {
    return await this.api.getAll();
  }

  public async save(task: Task): Promise<Task> {
    if (task.id) {
      return await this.api.update(task);
    } else {
      return await this.api.create(task);
    }
  }
}
