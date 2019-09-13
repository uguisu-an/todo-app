export interface CreateTaskInteractor {
  handle(req: CreateTaskRequest): Promise<CreateTaskResponse>;
}

export interface CreateTaskRequest {
  title: string;
}

// EntityとResponseが同じうちはtype宣言でいい？
export interface CreateTaskResponse {
  id: number;
  title: string;
}
