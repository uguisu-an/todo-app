export interface ListTaskInteractor {
  handle(req: ListTaskRequest): Promise<ListTaskResponse>;
}

export interface ListTaskRequest {}

export interface ListTaskResponse {
  tasks: {
    id: number;
    title: string;
  }[];
}
