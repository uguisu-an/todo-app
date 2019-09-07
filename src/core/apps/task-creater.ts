import { CreateTaskResponse, CreateTaskRequest } from "./task";
import Task from "../entities/task";
import TaskRepository from "../repositories/task-repository";

export default class TaskCreater {
  public constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  public async exec(req: CreateTaskRequest): Promise<CreateTaskResponse> {
    const task = new Task({
      title: req.title
    });
    return {
      task: await this.repository.save(task)
    };
  }

  private repository: TaskRepository;
}
