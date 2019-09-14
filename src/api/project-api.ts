import Project from "@/lib/entities/project";
import ProjectRepository from "@/lib/gateways/project-repository";
import { AxiosInstance } from "axios";

export default class ProjectApi implements ProjectRepository {
  public constructor(private api: AxiosInstance) {}

  public async create(project: Project): Promise<Project> {
    return await this.api.post("/projects", project);
  }
}
