import Project from "../models/project";
import ProjectRepository from "../gateways/project-repository";
import CreateProjectUseCase, {
  CreateProjectRequest
} from "../usecases/create-project";

export default class CreateProjectInteractor implements CreateProjectUseCase {
  public constructor(private projects: ProjectRepository) {}

  public async create(project: CreateProjectRequest): Promise<Project> {
    return (await this.projects.create(project)) as Project;
  }
}
