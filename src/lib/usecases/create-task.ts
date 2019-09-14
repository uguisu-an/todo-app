export default interface CreateTaskInteractor {
  handle(req: CreateTaskRequest): Promise<CreateTaskResponse>;
}

export interface CreateTaskRequest {
  title: string;
}

export interface CreateTaskResponse {
  id: number;
  title: string;
}
