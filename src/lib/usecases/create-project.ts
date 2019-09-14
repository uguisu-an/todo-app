import CreateProjectRequest from "../models/create-project-request";
import Project from "../models/project";

export default interface CreateProjectUseCase {
  create(project: CreateProjectRequest): Promise<Project>;
}
