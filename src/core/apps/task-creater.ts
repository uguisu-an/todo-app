import { CreateTaskResponse, CreateTaskRequest } from "./task";
import Task from "../entities/task";
import TaskRepository from "../repositories/task-repository";
import { CreateTaskRequester } from "./task";

export default class TaskCreater implements CreateTaskRequester {
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