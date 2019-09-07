import Task from "../entities/task";

export default interface TaskRepository {
  // get(id: number): Promise<Task>;
  getAll(): Promise<Task[]>;
  save(task: Task): Promise<Task>;
}
