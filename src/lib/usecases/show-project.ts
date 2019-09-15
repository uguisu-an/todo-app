export default interface ShowProjectInteractor {
  handle(req: ShowProjectRequest): Promise<ShowProjectResponse>;
}

export interface ShowProjectRequest {
  id: number;
}

export interface ShowProjectResponse {
  id: number;
  name: string;
  tasks: {
    id: number;
    title: string;
  }[];
}
