import Axios from "axios";
import Task from "@/core/entities/task";
import TaskGateway from "@/core/repositories/task-repository";

const client = Axios.create({ baseURL: "http://localhost:3000" });

function parseTask(t: any) {
  return {
    id: t.id,
    title: t.title
  };
}

export default class TaskApi implements TaskGateway {
  // public async get(id: number): Promise<Task> {
  //   const res = await client.get(`/tasks/${id}`);
  //   return parseTask(res.data);
  // }

  public async save(task: Task): Promise<Task> {
    return task.id ? this.update(task) : this.create(task);
  }

  private async create(task: Task): Promise<Task> {
    const res = await client.post("/tasks", task);
    return parseTask(res.data);
  }

  private async update(task: Task): Promise<Task> {
    const res = await client.put(`/tasks/${task.id}`, task);
    return parseTask(res.data);
  }
}
