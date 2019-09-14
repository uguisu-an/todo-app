export default interface CreateProjectInteractor {
  create(project: CreateProjectRequest): Promise<CreateProjectResponse>;
}

export interface CreateProjectRequest {
  name: string;
}

export interface CreateProjectResponse {
  id: number;
  name: string;
}
