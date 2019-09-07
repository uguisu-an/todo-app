import Task from "../entities/task";

export interface CreateTaskRequest {
  title: string;
}

export interface CreateTaskResponse {
  task: Task;
}

export type CreateTaskRequester = (
  req: CreateTaskRequest
) => CreateTaskResponse;

export interface ListTaskResponse {
  tasks: Task[];
}

export interface ListTaskRequester {
  exec(): Promise<ListTaskResponse>;
}
