import { AxiosInstance } from "axios";
import Task from "@/core/entities/task";
import TaskGateway from "@/core/gateways/task-gateway";

function parseTask(t: any) {
  return {
    id: t.id,
    title: t.title
  };
}

/**
 * APIにアクセスしてTaskをやり取りする
 */
export default class TaskApi implements TaskGateway {
  public constructor(private client: AxiosInstance) {}

  public async getAll(): Promise<Task[]> {
    const res = await this.client.get("/tasks");
    return res.data.map(parseTask);
  }

  public async create(task: Task): Promise<Task> {
    const res = await this.client.post("/tasks", task);
    return parseTask(res.data);
  }

  public async update(task: Task): Promise<Task> {
    const res = await this.client.put(`/tasks/${task.id}`, task);
    return parseTask(res.data);
  }
}
