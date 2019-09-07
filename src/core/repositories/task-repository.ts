import Task from "../entities/task";

export default interface TaskRepository {
  getAll(): Promise<Task[]>;
  save(task: Task): Promise<Task>;
}
