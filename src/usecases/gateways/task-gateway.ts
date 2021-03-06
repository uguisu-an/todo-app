import Task from "@/entities/task";

/**
 * TaskのAPIとやり取りする
 */
export default interface TaskGateway {
  getAll(): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
}
