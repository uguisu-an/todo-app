import Task from "../entities/task";

/**
 * Taskを永続化する
 */
export default interface TaskRepository {
  getAll(): Promise<Task[]>;
  save(task: Task): Promise<Task>;
}
