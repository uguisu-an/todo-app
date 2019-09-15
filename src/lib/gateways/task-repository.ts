import Task from "@/lib/entities/task";

/**
 * TaskのAPIとやり取りする
 */
export default interface TaskRepository {
  getByProjectId(projectId: number): Promise<Task[]>;
  getAll(): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
}
