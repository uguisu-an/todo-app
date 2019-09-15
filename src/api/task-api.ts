import { AxiosInstance } from "axios";
import Task from "@/lib/entities/task";
import TaskGateway from "@/lib/gateways/task-repository";

/**
 * APIにアクセスしてTaskをやり取りする
 */
export default class TaskApi implements TaskGateway {
  public constructor(private client: AxiosInstance) {}

  public async getByProjectId(projectId: number): Promise<Task[]> {
    const res = await this.client.get("/tasks", { params: { projectId } });
    return res.data.map(toTask);
  }

  public async getAll(): Promise<Task[]> {
    const res = await this.client.get("/tasks");
    return res.data.map(toTask);
  }

  public async create(task: Task): Promise<Task> {
    const res = await this.client.post("/tasks", task);
    return toTask(res.data);
  }

  public async update(task: Task): Promise<Task> {
    const res = await this.client.put(`/tasks/${task.id}`, task);
    return toTask(res.data);
  }
}

function toTask(t: any): Task {
  return {
    id: t.id,
    title: t.title
  };
}
